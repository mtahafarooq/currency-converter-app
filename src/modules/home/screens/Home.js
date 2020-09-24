import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { Header } from '../../../components/others/Header';
import { Container } from '../../../components/others/Container'
import { Logo } from '../../../components/others/Logo';

import { GET_CURRENCIES_LIST } from '../../../reducers/currency/actions';

const mapDispatchToProps = (dispatch, props) => ({
    getCurrenciesList: () => {
        dispatch({
            type: GET_CURRENCIES_LIST,
            payload: {},
        });
    },
});

const Home = ({ navigation, getCurrenciesList }) => {

    // useEffect(() => {
    //     getCurrenciesList();
    // }, []);

    return (
        <Container>
            <StatusBar translucent={false} barStyle="light-content" />
            <Header
                handlePress={() => navigation.navigate("Options")}
            />
            <Logo />
        </Container>
    )

}
const mapStateToProps = (state, props) => {
    console.log("STATE", state)
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);