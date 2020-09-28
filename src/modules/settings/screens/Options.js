import React from 'react';
import { StatusBar, ScrollView, Linking, Alert } from 'react-native';

import { OptionItem } from '../../../components/others/OptionItem';

const openURL = url =>
    Linking.openURL(url).catch(() =>
        Alert.alert("URL Not Found")
    );

export default ({ navigation }) => {
    return (
        <ScrollView>
            <StatusBar />
            <OptionItem
                pressHandler={() => { navigation.navigate('Themes') }}
                icon="ios-chevron-forward-outline"
                label="Themes"
            />
            <OptionItem
                pressHandler={() => {
                    openURL('https://fixer.io/')
                }}
                icon="ios-link-outline"
                label="Fixer.io"
            />
            <OptionItem
                pressHandler={() => { }}
                icon="ios-return-up-back-outline"
                label="Logout"
            />
        </ScrollView>
    )

}