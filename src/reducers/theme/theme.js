import { SET_THEME } from './actions';

const THEMES = [
    { name: 'Blue', code: '#4F6D7A' },
    { name: 'Orange', code: '#FF7F50' },
    { name: 'Green', code: '#33FFB8' },
    { name: 'Purple', code: '#BB8FCE' },
    { name: 'lightGray', code: "#F1F1F1"},
    { name: 'Maroon',   code: "#800000"},
    { name: 'Yellow', code:  "#FFFF00"}
]
const initialState = {
    defaultTheme: THEMES[0],
    selectedTheme: THEMES[0],
    themes: THEMES
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_THEME: {
            const { data } = action.payload;
            return {
                ...state,
                selectedTheme: data
            };
        }
        default:
            return state;
    }
};

export { reducer };
