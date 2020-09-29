import React, { useEffect, useState, Component } from 'react';
import {
    StatusBar,
    KeyboardAvoidingView,
    Keyboard,
    TextInput,
    Button,
    Alert,
    ActivityIndicator,
    Text
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/styles';

import { connect } from 'react-redux';

import { Container } from '../../../components/others/Container';
import { Logo } from '../../../components/others/Logo';

import { getCurrenciesList } from '../../../reducers/currency/actions';

class Login extends Component {
    constructor(props) {
        super(props)
        this.keyboardDidShowListener = Keyboard.addListener(
            "keyboardDidShow",
            this.keyboardDidShow
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this.keyboardDidHide
        );
        this.state = {
            username: '',
            password: '',
            requested: false,
            isKeyboardOpen: false
        }
    }

    componentDidMount() {
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            this.setState({ username: '', password: '' })
        });
        this.props.getCurrenciesList()
    }
    componentDidUpdate(prevProps, previousState) {

    }
    keyboardDidShow = (e) => {
        this.setState({ isKeyboardOpen: true });

    }
    keyboardDidHide = () => {
        this.setState({ isKeyboardOpen: false });

    }
    componentWillUnmount() {
        this._unsubscribe();
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    handleLogin = () => {
        if (this.state.username.length > 0 && this.state.password.length > 0) {
            this.setState({ requested: true })
            setTimeout(() => {
                this.setState({ requested: false })
                this.props.navigation.navigate('Home')

            }, 5000)
        }
        else {
            Alert.alert("Username or Password can not be empty")
        }

    }
    render() {
        const { username, password, requested } = this.state;
        const { getCurrenciesList, selectedTheme } = this.props;

        return (
            <Container theme={selectedTheme} >
                <StatusBar translucent={false} barStyle="light-content" />
                <KeyboardAvoidingView
                    behavior="position"
                    style={{ flex: 1, justifyContent: 'center' }}
                    keyboardVerticalOffset={(-6 * 64) / 2.0}
                >
                    <Logo
                        isKeyboardOpen={this.state.isKeyboardOpen} />
                    <TextInput
                        style={styles.textContainer}
                        placeholder={"username"}
                        autoCapitalize="none"
                        value={username}
                        onChangeText={(text) => { this.setState({ username: text }) }}
                    />
                    <TextInput
                        style={styles.textContainer}
                        placeholder={"password"}
                        autoCapitalize="none"
                        autoCompleteType="password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => { this.setState({ password: text }) }}
                    />
                    <TouchableOpacity onPress={this.handleLogin} style={styles.buttonContainer}>
                        <Text style={styles.buttonLabel}>Login</Text>
                    </TouchableOpacity>
                    {requested ? <ActivityIndicator size="large" color={styles.$WHITE} /> : null}
                </KeyboardAvoidingView>
            </Container>
        )
    }

}
const mapStateToProps = (state) => {
    const props = {
        selectedTheme: state.theme.selectedTheme
    }
    return props;
}
export default connect(
    mapStateToProps,
    { getCurrenciesList }
)(Login);