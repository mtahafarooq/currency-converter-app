import { takeEvery, put, call } from 'redux-saga/effects';
import {
    GET_CURRENCIES_LIST_RESQUEST,
    GET_CURRENCIES_LIST,
} from './actions';

function* handler() {
    yield takeEvery(GET_CURRENCIES_LIST_RESQUEST, fetchCurrenciesList);
}

function* fetchCurrenciesList(action) {
    const { URL } = action.payload
    yield put({
        type: GET_CURRENCIES_LIST,
        payload: {
            isLoading: true
        },
    });
    try {
        // API call
        const res = yield call(fetch, URL, { mode: 'no-cors' })
        let json = yield call([res, 'json'])
        yield put({
            type: GET_CURRENCIES_LIST,
            payload: {
                data: json,
                isLoading: false,
                success: true,
            },
        });
    } catch (error) {
        // Handle error
        yield put({
            type: GET_CURRENCIES_LIST,
            payload: {
                data: [],
                error: [],
                isLoading: false,
                success: false
            },
        });
    }
}

export { handler };