import { takeEvery, put } from 'redux-saga/effects';
import { GET_CURRENCIES_LIST } from './actions';

function* handler() {
    yield takeEvery(GET_CURRENCIES_LIST, fetchCurrenciesList);
}

function* fetchCurrenciesList(action) {
    try {
        // API call
        yield put({
            type: GET_CURRENCIES_LIST,
            payload: {
                data: [1, 2, 3, 4, 5]
            },
        });
    } catch (err) {
        // Handle error
    }
}

export { handler };