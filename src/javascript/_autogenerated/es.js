const texts_json = {};
texts_json['ES'] = {"Day":"Día","Month":"Mes","Year":"Año","Sorry,_an_error_occurred_while_processing_your_request_":"Lo sentimos, ha ocurrido un error mientras se procesaba su petición.","Open_a_Financial_Account":"Abrir una cuenta financiera","Connecting_to_server":"Conectando al servidor","Virtual_Account":"Cuenta virtual","Real_Account":"Cuenta real","Investment_Account":"Cuenta de inversión","Gaming_Account":"Cuenta de juego","Sunday":"Domingo","Monday":"Lunes","Tuesday":"Martes","Wednesday":"Miércoles","Thursday":"Jueves","Friday":"Viernes","Saturday":"Sábado","Su":"DO","Mo":"LU","Tu":"MA","We":"MI","Th":"JU","Fr":"VI","Sa":"SA","January":"Enero","February":"Febrero","March":"Marzo","April":"Abril","June":"Junio","July":"Julio","August":"Agosto","September":"Septiembre","October":"Octubre","November":"Noviembre","December":"Diciembre","Jan":"Ene","Apr":"Abr","Aug":"Ago","Dec":"Dic","Next":"Siguiente","Previous":"Anterior","Hour":"Hora","Minute":"Minuto","Start_time":"Hora de comienzo","Entry_spot":"Punto de entrada","Purchase_Time":"Hora de compra","Exit_spot":"Punto de salida","End_time":"Hora de finalización","Charting_for_this_underlying_is_delayed":"Gráficos para este instrumento se muestran con retraso","year":"año","month":"mes","day":"día","days":"días","hours":"horas","minutes":"minutos","seconds":"segundos","Loss":"Pérdida","Profit":"Beneficios","Payout":"Pago","Stake":"Inversión","Duration":"Duración","End_Time":"Hora de finalización","Net_profit":"Beneficio Neto","Return":"Ganancias","Now":"Ahora","Contract_Confirmation":"Confirmación del contrato","Your_transaction_reference_is":"La referencia de su transacción es","Rise/Fall":"Alza/Baja","Higher/Lower":"Superior/Inferior","In/Out":"Dentro/Fuera","Matches/Differs":"Iguales/Diferentes","Even/Odd":"Par/Impar","Over/Under":"Encima/Debajo","Up/Down":"Arriba/Abajo","Ends_Between/Ends_Outside":"Finaliza dentro/Finaliza fuera","Touch/No_Touch":"Toque/Sin toque","Potential_Payout":"Pago potencial","Total_Cost":"Coste total","Potential_Profit":"Beneficios potenciales","View":"Ver","Tick":"Intervalo","Buy_price":"Precio de compra","Long":"Largos","Short":"Cortos","Chart":"Gráfico","Portfolio":"Cartera","Explanation":"Explicación","Last_Digit_Stats":"Estadísticas del último dígito","Waiting_for_entry_tick_":"Esperando el tick de entrada.","Please_log_in_":"Por favor inicie sesión.","All_markets_are_closed_now__Please_try_again_later_":"Todos los mercados están cerrados ahora. Inténtelo más tarde.","Account_balance:":"Saldo de la cuenta:","Cryptocurrency":"Criptomonedas","Close":"Cerrar","Your_account_is_fully_authenticated_and_your_withdrawal_limits_have_been_lifted_":"Su cuenta está totalmente autenticada y su límite de retirada ha sido aumentado.","Your_withdrawal_limit_is_[_1]_[_2]_":"Su límite de retirada es [_1] [_2].","Your_withdrawal_limit_is_[_1]_[_2]_(or_equivalent_in_other_currency)_":"Su límite de retirada es [_1] [_2] (o el equivalente en otra divisa).","You_have_already_withdrawn_[_1]_[_2]_":"Usted ya retiró [_1] [_2].","You_have_already_withdrawn_the_equivalent_of_[_1]_[_2]_":"Usted ya retiró el equivalente a [_1] [_2].","Therefore_your_current_immediate_maximum_withdrawal_(subject_to_your_account_having_sufficient_funds)_is_[_1]_[_2]_":"Por lo tanto, la cantidad máxima que puede retirar de forma inmediata (sujeta a la existencia de fondos suficientes en su cuenta) es [_1] [_2].","Therefore_your_current_immediate_maximum_withdrawal_(subject_to_your_account_having_sufficient_funds)_is_[_1]_[_2]_(or_equivalent_in_other_currency)_":"Por lo tanto, la cantidad máxima que puede retirar de forma inmediata (sujeta a la existencia de fondos suficientes en su cuenta) es [_1] [_2] (o su equivalente en otra divisa).","Your_[_1]_day_withdrawal_limit_is_currently_[_2]_[_3]_(or_equivalent_in_other_currency)_":"Su [_1] límite diario para retirar dinero es actualmente [_2] [_3] (o el equivalente en otra divisa).","You_have_already_withdrawn_the_equivalent_of_[_1]_[_2]_in_aggregate_over_the_last_[_3]_days_":"Usted ya retiró un total equivalente a [_1] [_2]  en los últimos [_3] días.","Contracts_where_the_barrier_is_the_same_as_entry_spot_":"Contratos en que la barrera es igual al punto de entrada.","Contracts_where_the_barrier_is_different_from_the_entry_spot_":"Contratos en que la barrera es diferente al punto de entrada.","ATM":"Cajero automático","Duration_up_to_7_days":"Duración hasta 7 días","Duration_above_7_days":"Duración superior a 7 días","Major_Pairs":"Pares mayores","This_field_is_required_":"Este campo es obligatorio.","Only_[_1]_are_allowed_":"Se permiten solo [_1].","letters":"letras","numbers":"números","space":"espacio","Sorry,_an_error_occurred_while_processing_your_account_":"Lo sentimos, ha ocurrido un error mientras se procesaba su cuenta.","Female":"Mujer","Male":"Hombre","Password_should_have_lower_and_uppercase_letters_with_numbers_":"La contraseña debe tener letras minúsculas y mayúsculas con números.","Password_is_not_strong_enough_":"La contraseña no es lo suficientemente fuerte.","Your_session_duration_limit_will_end_in_[_1]_seconds_":"El límite de duración de su sesión terminará en [_1] segundos.","Please_select":"Seleccione","Minimum_of_[_1]_characters_required_":"Mínimo de [_1] caracteres requeridos.","Asset":"Activo","Opens":"Abre","Closes":"Cierra","Settles":"Establece","Upcoming_Events":"Próximos eventos","Closes_early_(at_21:00)":"Cierra temprano (a las 21:00)","Closes_early_(at_18:00)":"Cierra temprano (a las 18:00)","Christmas_Day":"Día de Navidad","Fridays":"Viernes","Please_select_a_payment_agent":"Seleccione un agente de pago","The_Payment_Agent_facility_is_currently_not_available_in_your_country_":"Los agentes de pagos no están disponibles actualmente para su país.","Invalid_amount,_minimum_is":"Monto inválido, el mínimo es","Invalid_amount,_maximum_is":"Monto invalido. El máximo es","Your_request_to_withdraw_[_1]_[_2]_from_your_account_[_3]_to_Payment_Agent_[_4]_account_has_been_successfully_processed_":"Su solicitud de retirada de [_1] [_2] de su cuenta [_3] al agente de pagos [_4] se ha procesado correctamente.","New_token_created_":"Un token nuevo ha sido creado.","The_maximum_number_of_tokens_([_1])_has_been_reached_":"El máximo número de tokens ([_1]) ha sido alcanzado.","Name":"Nombre","Last_Used":"Último usado","Never_Used":"Nunca usado","Delete":"Eliminar","Are_you_sure_that_you_want_to_permanently_delete_the_token":"¿Está seguro de querer eliminar definitivamente el token?","Guide":"Guía","Finish":"Terminar","Step":"Paso","Select_your_market":"Seleccione su mercado","Select_your_underlying_asset":"Seleccione el activo subyacente","Select_your_trade_type":"Seleccione el tipo de contrato","Adjust_trade_parameters":"Ajustar parámetros de comercio","Predict_the_direction<br_/>and_purchase":"Prediga la dirección<br /> y compre","Sorry,_this_feature_is_available_to_virtual_accounts_only_":"Lo sentimos, esta característica está disponible solo para cuentas virtuales.","years":"años","months":"meses","Your_changes_have_been_updated_":"Sus cambios se han actualizado.","Please_enter_an_integer_value":"Ingrese un valor entero","Session_duration_limit_cannot_be_more_than_6_weeks_":"El límite de la duración de la sesión no puede ser superior a 6 semanas.","You_did_not_change_anything_":"No ha cambiado nada.","Exclude_time_cannot_be_less_than_6_months_":"El tiempo de exclusión no puede ser menor a 6 meses.","Exclude_time_cannot_be_for_more_than_5_years_":"El tiempo de exclusión no puede ser mayor a 5 años.","Date":"Fecha","Action":"Acción","Contract":"Contrato","Sale_Date":"Fecha de venta","Sale_Price":"Precio venta","Total_Profit/Loss":"Beneficios/perdidas totales","Your_account_has_no_trading_activity_":"Su cuenta no tiene actividad comercial.","Details":"detalles","Sell":"Venta","Buy":"Comprar","This_feature_is_not_relevant_to_virtual-money_accounts_":"Esta característica no es relevante para cuentas de dinero virtual.","Japan":"Japón","Questions":"Preguntas","There_was_some_invalid_character_in_an_input_field_":"Había un carácter no válido en el campo de entrada.","Please_follow_the_pattern_3_numbers,_a_dash,_followed_by_4_numbers_":"Por favor, siga el patrón de 3 números y un guión seguido de 4 números.","You_need_to_finish_all_20_questions_":"Tiene que terminar todas las 20 preguntas.","Weekday":"Día de la semana","Asian_Up":"Asiáticas arriba","Asian_Down":"Asiáticas abajo","Digit_Matches":"Dígito coincide","Digit_Differs":"Dígito difiere","Digit_Odd":"Dígito impar","Digit_Even":"Dígito par","Digit_Over":"Dígito sobre","Digit_Under":"Dígito por debajo","[_1]_[_2]_payout_if_[_3]_does_not_touch_Barrier_through_close_on_[_4]_":"Pago de [_1] [_2] si [_3] no toca la barrera hasta el cierre en [_4].","Higher":"Superior","Higher_or_equal":"Mayor o igual","Does_Not_Touch":"No toque","Ends_Between":"Finaliza entre","Ends_Outside":"Finaliza fuera","Goes_Outside":"Sale fuera","All_barriers_in_this_trading_window_are_expired":"Todos los límites en esta ventana de comercio han caducado","Sorry,_your_account_is_not_authorised_for_any_further_contract_purchases_":"Lo sentimos, su cuenta no está autorizada para continuar con la compra de contratos.","Digit":"Dígito","Amount":"Monto","Deposit":"Depósito","Your_request_to_transfer_[_1]_[_2]_from_[_3]_to_[_4]_has_been_successfully_processed_":"Su solicitud de transferencia [_1] [_2] de [_3] a [_4] ha sido procesada exitosamente.","Date_and_Time":"Fecha y Hora","Browser":"Navegador","IP_Address":"Dirección IP","Status":"Estado","Successful":"Exitoso","Failed":"Fallado","Your_account_has_no_Login/Logout_activity_":"Su cuenta no tiene actividad de accesos/cierres de sesión.","Please_enter_a_number_between_[_1]_":"Por favor, introduzca un número entre [_1].","[_1]_days_[_2]_hours_[_3]_minutes":"[_1] días [_2] horas [_3] minutos","Your_trading_statistics_since_[_1]_":"Las estadísticas de sus transacciones desde [_1].","Unlock_Cashier":"Desbloquear cajero","Your_cashier_is_locked_as_per_your_request_-_to_unlock_it,_please_enter_the_password_":"Su cajero está bloqueado según su petición - para desbloquearlo, por favor introduzca la contraseña.","Lock_Cashier":"Bloquear cajero","An_additional_password_can_be_used_to_restrict_access_to_the_cashier_":"Se puede utilizar una contraseña adicional para restringir el acceso al cajero.","Update":"Actualizar","Sorry,_you_have_entered_an_incorrect_cashier_password":"Lo sentimos, ingresó una contraseña de cajero incorrecta","Start_Time":"Hora de comienzo","Entry_Spot":"Punto de entrada","Low_Barrier":"Barrera Inferior","High_Barrier":"Barrera Superior","High_Barrier_([_1])":"Barrera Alta ([_1])","Barrier_([_1])":"Límite ([_1])","This_contract_won":"Este contrato ganó","This_contract_lost":"Este contrato perdió","Spot":"Precio actual del mercado","Barrier":"Límite","Target":"Objetivo","Description":"Descripción","Credit/Debit":"Crédito/débito","Balance":"Saldo","Purchase_Price":"Precio de compra","Profit/Loss":"Ganado/Perdido","Contract_Information":"Información del Contrato","Contract_Expiry":"Vencimiento del Contrato","Contract_Sold":"Contrato Vendido","Current":"Actual","Open":"Abierto","Closed":"Cerrado","Contract_has_not_started_yet":"El contrato no ha comenzado todavía","Price":"Precio","Current_Time":"Hora actual","Exit_Spot_Time":"Tiempo de Punto de Salida","Exit_Spot":"Punto de salida","Indicative":"Indicativo","There_was_an_error":"Hubo un error","Sell_at_market":"Vender al precio actual","You_have_sold_this_contract_at_[_1]_[_2]":"Usted ha vendido este contrato en [_1] [_2]","Your_transaction_reference_number_is_[_1]":"El número de referencia de su transacción es [_1]","Note":"Nota","Contract_will_be_sold_at_the_prevailing_market_price_when_the_request_is_received_by_our_servers__This_price_may_differ_from_the_indicated_price_":"El contrato se venderá al precio vigente en el mercado en el momento de la recepción de la solicitud de venta por nuestros servidores. Este precio puede ser diferente del precio indicado.","Contract_ID":"ID del Contrato","Contract_Type":"Tipo de contrato","Remaining_Time":"Tiempo Restante","Barrier_Change":"Cambio de Límite","Audit":"Auditoría","Audit_Page":"Página de auditoría","Contract_Ends":"El contrato termina","Exit_Time_and_Exit_Spot":"Finalización del contrato y Precio de salida","You_have_not_granted_access_to_any_applications_":"Usted no ha concedido acceso a ninguna aplicación.","Permissions":"Permisos","Never":"Nunca","Revoke_access":"Revocar el acceso","Are_you_sure_that_you_want_to_permanently_revoke_access_to_the_application":"¿Está seguro de que desea revocar permanentemente el acceso a la aplicación?","Transaction_performed_by_[_1]_(App_ID:_[_2])":"Transacción realizada por [_1] (ID de la aplicación: [_2])","Admin":"Administrador","Read":"Leer","Payments":"Pagos","[_1]_Please_click_the_link_below_to_restart_the_password_recovery_process_":"[_1] Haga clic en el siguiente enlace para reiniciar el proceso de recuperación de contraseña.","Your_password_has_been_successfully_reset__Please_log_into_your_account_using_your_new_password_":"Su contraseña se ha restablecido. Por favor, inicie sesión en su cuenta utilizando su nueva contraseña.","details":"detalles","Withdraw":"Retirar","There_was_a_problem_accessing_the_server_":"Hubo un problema al acceder al servidor.","There_was_a_problem_accessing_the_server_during_purchase_":"Hubo un problema al acceder al servidor durante la compra.","The_two_passwords_that_you_entered_do_not_match_":"Las dos contraseñas introducidas no coinciden.","[_1]_and_[_2]_cannot_be_the_same_":"[_1] y [_2] no pueden ser iguales.","Hint:_it_would_take_approximately_[_1][_2]_to_crack_this_password_":"Pista: se necesitaría aproximadamente [_1][_2] para descifrar esta contraseña.","Congratulations!_Your_[_1]_Account_has_been_created_":"¡Felicidades! Su cuenta [_1] ha sido creada.","[_1]_deposit_from_[_2]_to_account_number_[_3]_is_done__Transaction_ID:_[_4]":"[_1] depósito desde [_2] a la cuenta número [_3] se ha realizado con éxito. ID de transacción: [_4]","Current_password":"Contraseña actual","New_password":"Contraseña nueva","Demo_Standard":"Demo estándar","Demo_Advanced":"Demo avanzada","Advanced":"Avanzado","Demo_Volatility_Indices":"Demo de índices de volatilidad","Change_Password":"Cambiar contraseña","Demo_Accounts":"Cuentas de prueba","Current_balance":"Saldo actual","[_1]Authenticate_your_account[_2]_now_to_take_full_advantage_of_all_payment_methods_available_":"[_1]Autentifique su cuenta[_2] ahora para aprovechar al máximo todos los métodos de pago disponibles.","Connection_error:_Please_check_your_internet_connection_":"Error de conexión: por favor, compruebe su conexión a internet.","[_1]_requires_your_browser's_web_storage_to_be_enabled_in_order_to_function_properly__Please_enable_it_or_exit_private_browsing_mode_":"[_1] requiere que el almacenamiento web de su navegador esté activo para funcionar correctamente. Por favor, habilítelo o salga del modo de navegación privada.","Bid":"Oferta","Closed_Bid":"Cerrar oferta","Create":"Crear","Commodities":"Materias primas","Indices":"Índices","Volatility_Indices":"Índices de Volatilidad","Create_Account":"Crear cuenta","Accounts_List":"Lista de cuentas","[_1]_Account":"Cuenta [_1]","Gaming":"Apuestas","Counterparty":"Contraparte","Ether":"Ethereum","Ether_Classic":"Ethereum Classic","ID_number_is_required_for_[_1]_":"La cédula de identidad es requerida para [_1].","Expiry_date_is_required_for_[_1]_":"Fecha de vencimiento es requerida por [_1].","ID_card":"Cédula de identidad","Driving_licence":"Licencia de conducir","Front_Side":"Parte delantera","Front_and_reverse_side_photos_of_[_1]_are_required_":"Fotos de la parte delantera y reverso de [_1] son necesarias.","[_1]Your_Proof_of_Identity_or_Proof_of_Address[_2]_did_not_meet_our_requirements__Please_check_your_email_for_further_instructions_":"[_1]Su comprobante de identidad o de domicilio[_2] no cumple nuestros requisitos. Por favor, revise su correo electrónico para más instrucciones."};