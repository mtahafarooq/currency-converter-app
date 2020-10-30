import React from 'react';
import EStyleSheet from "react-native-extended-stylesheet";

import Home from './modules/home/screens/Home';
import Login from './modules/auth/screens/Login';

import Router from './config/routes';

import { store } from './config/store';
import { Provider } from 'react-redux';


EStyleSheet.build({
    $primaryBlue: "#4F6D7A",
    $orange: '#FF7F50',
    $green: '#33FFB8',
    $purple: '#BB8FCE',
    $white: "#ffff",
    $black: "#000000",
    $border: "#E2E2E2",
    $inputText: "#797979",
    $lightGray: "#F1F1F1",
    $Maroon:  "#800000",
    Yellow: "#FFFF00"
});

export default () => {
    return (
        <Provider store={store} >
            <Router />
        </Provider>
    )
}

// export default from '../storybook'

