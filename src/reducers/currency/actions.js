export const GET_CURRENCIES_LIST_RESQUEST = "GET_CURRENCIES_LIST_RESQUEST";
export const GET_CURRENCIES_LIST = "GET_CURRENCIES_LIST";

import { Config } from '../../config/api';

const { BASE_API_URL, GET_CURRENCIES_LIST_URL } = Config
export function getCurrenciesList(baseCurrency = 'USD') {
    return {
        type: GET_CURRENCIES_LIST_RESQUEST,
        payload: {
            URL: BASE_API_URL + GET_CURRENCIES_LIST_URL + baseCurrency
        }
    }
}