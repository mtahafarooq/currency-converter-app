import React, { Component } from 'react';

import { View, FlatList, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../../../components/others/Container'
import { CurrencyItem } from '../../../components/others/CurrencyItem'

class CurrencyList extends Component {

    constructor(props) {
        super(props)

    }

    renderItem({ item }) {
        const calledFor = this.props.route.params?.calledFor
        return (
            <CurrencyItem
                label={item}
                pressHandler={() => {
                    this.props.navigation.navigate('Home', {
                        selectedCurrency: item,
                        calledFor
                    })
                }}
            />
        );
    }

    render() {
        const { currencies } = this.props;
        return (
            <View>
                <StatusBar translucent={false} barStyle="default" />
                <FlatList
                    data={currencies}
                    extraData={this.props}
                    renderItem={this.renderItem.bind(this)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    const props = {
        currencies: state?.currency.currencies.rates ? Object.keys(state?.currency.currencies.rates) : []
    }
    return props;
}
export default connect(
    mapStateToProps
)(CurrencyList);
