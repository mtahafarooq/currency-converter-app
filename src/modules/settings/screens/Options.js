import React from 'react';
import { StatusBar, ScrollView, Linking, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';

import { OptionItem } from '../../../components/others/OptionItem';
import { setTheme } from '../../../reducers/theme/actions';

const openURL = url =>
    Linking.openURL(url).catch(() =>
        Alert.alert("URL Not Found")
    );

const Options = ({ navigation, defaultTheme, setTheme }) => {
    return (
        <ScrollView>
            <StatusBar translucent={false} barStyle="default" />
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
                pressHandler={async () => {
                    await AsyncStorage.clear()
                    setTheme(defaultTheme)
                    navigation.navigate('Login')
                }}
                icon="ios-return-up-back-outline"
                label="Logout"
            />
        </ScrollView>
    )

}
const mapStateToProps = (state) => {
    const props = {
        defaultTheme: state.theme.defaultTheme
    }
    return props;
}
export default connect(
    mapStateToProps,
    {
        setTheme
    }
)(Options);