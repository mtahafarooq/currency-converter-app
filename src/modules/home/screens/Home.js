import React, { useEffect, useState, Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { Header } from '../../../components/others/Header';
import { Container } from '../../../components/others/Container'
import { Logo } from '../../../components/others/Logo';
import { CurrencyInput } from '../../../components/others/CurrencyInput';

import { getCurrenciesList } from '../../../reducers/currency/actions';


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            baseValue: '',
            quoteValue: '',
            baselabel: 'USD',
            quoteLabel: 'GBP',
            conversionDate: ''
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
    onBaseInputChnage = (val) => {
        this.setState({ baseValue: val })
    }
    onQuoteInputChnage = (val) => {
        this.setState({ quoteValue: val })
    }
    componentWillUnmount() {
        this._unsubscribe();
    }
    render() {
        const { baseValue, quoteValue, baselabel, quoteLabel } = this.state;
        const { navigation, getCurrenciesList } = this.props

        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Header
                    handlePress={() => navigation.navigate("Options")}
                />
                <Logo />
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
                />
            </Container>
        )
    }

}
const mapStateToProps = (state) => {
    const props = {
        currencies: state?.currency
    }
    return props;
}
export default connect(
    mapStateToProps,
    { getCurrenciesList }
)(Home);