import { combineReducers } from 'redux';
import { reducer as currencyReducer } from './currency/currency';
import { reducer as themeReducer } from './theme/theme';

const reducer = combineReducers({
    currency: currencyReducer,
    theme: themeReducer
});

export { reducer };