const getLanguage      = require('../language').get;
const localize         = require('../localize').localize;
const getPropertyValue = require('../utility').getPropertyValue;

let currencies_config = {};

const formatMoney = (currency_value, amount, exclude_currency, decimals = 0, minimumFractionDigits = 0) => {
    let money = amount;
    if (money) money = String(money).replace(/,/g, '');
    const sign           = money && Number(money) < 0 ? '-' : '';
    const decimal_places = decimals || getDecimalPlaces(currency_value);

    money = isNaN(money) ? 0 : Math.abs(money);
    if (typeof Intl !== 'undefined') {
        const options = {
            minimumFractionDigits: minimumFractionDigits || decimal_places,
            maximumFractionDigits: decimal_places,
        };
        money = new Intl.NumberFormat(getLanguage().toLowerCase().replace('_', '-'), options).format(money);
    } else {
        money = addComma(money, decimal_places);
    }

    return sign + (exclude_currency ? '' : formatCurrency(currency_value)) + money;
};

const formatCurrency = currency => `<span class="symbols ${(currency || '').toLowerCase()}"></span>`; // defined in binary-style

const addComma = (num, decimal_points, is_crypto) => {
    let number = String(num || 0).replace(/,/g, '');
    if (typeof decimal_points !== 'undefined') {
        number = (+number).toFixed(decimal_points);
    }
    if (is_crypto) {
        number = parseFloat(+number);
    }

    return number.toString().replace(/(^|[^\w.])(\d{4,})/g, ($0, $1, $2) => (
        $1 + $2.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, '$&,')
    ));
};

const calcDecimalPlaces = (currency) => isCryptocurrency(currency) ? 8 : 2;

const getDecimalPlaces = (currency) => (
    // need to check currencies_config[currency] exists instead of || in case of 0 value
    currencies_config[currency] ? getPropertyValue(currencies_config, [currency, 'fractional_digits']) : calcDecimalPlaces(currency)
);

const setCurrencies = (website_status) => {
    currencies_config = website_status.currencies_config;
};

// (currency in crypto_config) is a back-up in case website_status doesn't include the currency config, in some cases where it's disabled
const isCryptocurrency = currency => /crypto/i.test(getPropertyValue(currencies_config, [currency, 'type'])) || (currency in CryptoConfig.get());

const CryptoConfig = (() => {
    let crypto_config;

    const initCryptoConfig = () => ({
        BTC: { name: localize('Bitcoin'),       min_withdrawal: 0.002, pa_max_withdrawal: 5,    pa_min_withdrawal: 0.002 },
        BCH: { name: localize('Bitcoin Cash'),  min_withdrawal: 0.002, pa_max_withdrawal: 5,    pa_min_withdrawal: 0.002 },
        ETH: { name: localize('Ether'),         min_withdrawal: 0.002, pa_max_withdrawal: 5,    pa_min_withdrawal: 0.002 },
        ETC: { name: localize('Ether Classic'), min_withdrawal: 0.002, pa_max_withdrawal: 5,    pa_min_withdrawal: 0.002 },
        LTC: { name: localize('Litecoin'),      min_withdrawal: 0.002, pa_max_withdrawal: 5,    pa_min_withdrawal: 0.002 },
        UST: { name: localize('Tether'),        min_withdrawal: 0.02,  pa_max_withdrawal: 2000, pa_min_withdrawal: 10 },
        USB: { name: localize('Binary Coin'),   min_withdrawal: 0.02,  pa_max_withdrawal: 2000, pa_min_withdrawal: 10 },
    });

    return {
        get: () => {
            if (!crypto_config) {
                crypto_config = initCryptoConfig();
            }
            return crypto_config;
        },
    };
})();

const getMinWithdrawal = currency => (isCryptocurrency(currency) ? (getPropertyValue(CryptoConfig.get(), [currency, 'min_withdrawal']) || 0.002) : 1);

/**
 * Returns the transfer limits for the account.
 * @param currency
 * @param which
 * @returns numeric
 */
const getTransferLimits = (currency, which) => {
    const transfer_limits = getPropertyValue(currencies_config, [currency, 'transfer_between_accounts', 'limits']) || getMinWithdrawal(currency);
    const decimals        = getDecimalPlaces(currency);
    if (which === 'max') {
        return transfer_limits.max ? transfer_limits.max.toFixed(decimals) : undefined;
    }
    
    return transfer_limits.min ? transfer_limits.min.toFixed(decimals) : transfer_limits;
};

const getTransferFee = (currency_from, currency_to) => {
    const transfer_fee = getPropertyValue(currencies_config, [currency_from, 'transfer_between_accounts', 'fees', currency_to]);
    return `${typeof transfer_fee === 'undefined' ? '1' : transfer_fee}%`;
};

// returns in a string format, e.g. '0.00000001'
const getMinimumTransferFee = (currency) => {
    const decimals = getDecimalPlaces(currency);
    return `${currency} ${(1 / Math.pow(10, decimals)).toFixed(decimals)}`; // we need toFixed() so that it doesn't display in scientific notation, e.g. 1e-8 for currencies with 8 decimal places
};

// @param {String} limit = max|min
const getPaWithdrawalLimit = (currency, limit) => {
    if (isCryptocurrency(currency)) {
        return getPropertyValue(CryptoConfig.get(), [currency, `pa_${limit}_withdrawal`]); // pa_min_withdrawal and pa_max_withdrawal used here
    }
    return limit === 'max' ? 2000 : 10; // limits for fiat currency
};

const getCurrencyName = currency => getPropertyValue(CryptoConfig.get(), [currency, 'name']) || '';

const getMinPayout = currency => getPropertyValue(currencies_config, [currency, 'stake_default']);

module.exports = {
    formatMoney,
    formatCurrency,
    addComma,
    getDecimalPlaces,
    setCurrencies,
    isCryptocurrency,
    getCurrencyName,
    getMinWithdrawal,
    getTransferLimits,
    getTransferFee,
    getMinimumTransferFee,
    getMinPayout,
    getPaWithdrawalLimit,
    getCurrencies: () => currencies_config,
};
