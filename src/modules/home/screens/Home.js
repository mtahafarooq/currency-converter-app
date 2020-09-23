import React from 'react';
import { StatusBar } from 'react-native';

import { Header } from '../../../components/others/Header';
import { Container } from '../../../components/others/Container'
import { Logo } from '../../../components/others/Logo';

export default ({ navigation }) => {
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