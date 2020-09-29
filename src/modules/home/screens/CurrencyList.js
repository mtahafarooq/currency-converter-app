import React, { Component } from 'react';

import { View, FlatList, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import { Container } from '../../../components/others/Container'
import { CurrencyItem } from '../../../components/others/CurrencyItem'

class CurrencyList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }

    }
    async fetchUser() {
        try {
            const userDetails = await AsyncStorage.getItem('user')
            const userObj = JSON.parse(userDetails)
            this.setState({ user: userObj })
        } catch (e) {
            // read error
        }
    }
    componentDidMount() {
        this.fetchUser()
    }
    checkFavourite(item) {
        const { user } = this.state
        const currencies = user.favouriteCurrencies || []
        return currencies.indexOf(item) > -1 ? true : false

    }
    handleFavouritePress = async (item) => {
        const { user } = this.state

        const index = user.favouriteCurrencies.indexOf(item)
        if (index > -1) {
            user.favouriteCurrencies.splice(index, 1)
        }
        else {
            user.favouriteCurrencies.push(item)
        }

        try {
            await AsyncStorage.setItem('user', JSON.stringify(user))
        } catch (e) {
            // save error
        }

        this.setState({ user: user })
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
                isFavourite={this.checkFavourite(item)}
                handleFavourite={this.handleFavouritePress}
            />
        );
    }

    render() {
        const { currencies } = this.props;
        if (this.state.user) {
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
        else {
            return null
        }

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
