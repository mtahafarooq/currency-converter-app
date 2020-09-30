import React, { useEffect, useState, Component } from 'react';
import { StatusBar, KeyboardAvoidingView, Keyboard } from 'react-native';
import { connect } from 'react-redux';

import { Header } from '../../../components/others/Header';
import { Container } from '../../../components/others/Container'
import { Logo } from '../../../components/others/Logo';
import { CurrencyInput } from '../../../components/others/CurrencyInput';

import { getCurrenciesList } from '../../../reducers/currency/actions';


class Home extends Component {
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
            baseValue: '',
            quoteValue: '',
            baselabel: 'USD',
            quoteLabel: 'GBP',
            conversionDate: '',
            isKeyboardOpen: false
        }
    }

    componentDidMount() {
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            const passedParams = this.props.route.params
            if (passedParams) {
                const { selectedCurrency, calledFor } = passedParams
                if (calledFor == 'baseCurrency') {
                    this.props.getCurrenciesList(selectedCurrency)

                    this.setState({ baselabel: selectedCurrency })
                }
                else {
                    const { currencies } = this.props;
                    const { data } = currencies;
                    const { date, rates } = data
                    const qouteRate = rates[String(selectedCurrency)]

                    this.setState({ quoteLabel: selectedCurrency, quoteValue: qouteRate })

                }
            }
        });
        this.props.getCurrenciesList(this.state.baselabel)
    }
    componentDidUpdate(prevProps, previousState) {
        if (this.props?.currencies != null) {
            if (prevProps?.currencies != this.props.currencies) {
                const { currencies } = this.props;
                if (currencies.success == true) {
                    const { data } = currencies;
                    const { date, rates } = data
                    const quoteLabel = String(this.state.quoteLabel)
                    const qouteRate = rates[quoteLabel]
                    this.setState({
                        conversionDate: date,
                        quoteValue: Number(qouteRate)
                    })
                }
                else {

                }

            }

        }
    }
    keyboardDidShow = (e) => {
        this.setState({ isKeyboardOpen: true });

    }
    keyboardDidHide = () => {
        this.setState({ isKeyboardOpen: false });

    }
    onBaseInputChnage = (val) => {
        this.setState({ baseValue: val })
    }
    onQuoteInputChnage = (val) => {
        this.setState({ quoteValue: val })
    }
    componentWillUnmount() {
        this._unsubscribe();
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    render() {
        const { baseValue, quoteValue, baselabel, quoteLabel } = this.state;
        const { navigation, getCurrenciesList, selectedTheme } = this.props;

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
                    <CurrencyInput
                        onCurrencySelect={() => {
                            navigation.navigate("CurrencyList", {
                                title: "Base Currency",
                                calledFor: 'baseCurrency'

                            })
                        }}
                        label={baselabel}
                        value={baseValue}
                        onInputChange={this.onBaseInputChnage}
                        selectedTheme={selectedTheme}
                    />
                    <CurrencyInput
                        onCurrencySelect={() => {
                            navigation.navigate("CurrencyList", {
                                title: "Quote Currency",
                                calledFor: 'quoteCurrency'
                            })
                        }}
                        label={quoteLabel}
                        value={baseValue ? parseFloat(quoteValue * baseValue).toFixed(2) : ''}
                        onInputChange={this.onQuoteInputChnage}
                        selectedTheme={selectedTheme}
                    />
                </KeyboardAvoidingView>
                <Header
                    handlePress={() => navigation.navigate("Options")}
                />

            </Container>
        )
    }

}
const mapStateToProps = (state) => {
    const props = {
        currencies: state?.currency,
        selectedTheme: state.theme.selectedTheme
    }
    return props;
}
export default connect(
    mapStateToProps,
    { getCurrenciesList }
)(Home);