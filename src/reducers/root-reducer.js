import { combineReducers } from 'redux';
import { reducer as currencyReducer } from './currency/currency';

const reducer = combineReducers({
    currency: currencyReducer,
});

export { reducer };