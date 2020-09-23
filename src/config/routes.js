import React from 'react';

import Home from '../modules/home/screens/Home';
import Login from '../modules/auth/screens/Login';
import Options from '../modules/settings/screens/Options';
import Themes from '../modules/settings/screens/Themes';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Options" component={Options} />
                <Stack.Screen name="Themes" component={Themes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
