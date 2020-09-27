import { GET_CURRENCIES_LIST } from './actions';

const initialState = {
    currencies: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENCIES_LIST: {
            const { data, isLoading } = action.payload;
            return {
                ...action.payload,
                currencies: data || []
            };
        }
        default:
            return state;
    }
};

export { reducer };