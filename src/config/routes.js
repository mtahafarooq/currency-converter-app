import React from 'react';

import Home from '../modules/home/screens/Home';
import Login from '../modules/auth/screens/Login';
import Options from '../modules/settings/screens/Options';
import Themes from '../modules/settings/screens/Themes';
import CurrencyList from '../modules/home/screens/CurrencyList';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Options" component={Options} />
                <Stack.Screen name="Themes" component={Themes} />
                <Stack.Screen
                    name="CurrencyList"
                    component={CurrencyList}
                    options={({ navigation, route }) => ({
                        title: route.params.title,
                        headerLeft: null,
                    })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
