import React from 'react';
import { StatusBar, ScrollView } from 'react-native';

import { OptionItem } from '../../../components/others/OptionItem';

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
                pressHandler={() => { }}
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