import React from 'react';
import { StatusBar, ScrollView } from 'react-native';
import styles from './styles/styles'

import { ThemeItem } from '../../../components/others/ThemeItem';

export default () => {
    return (
        <ScrollView>
            <StatusBar />
            <ThemeItem
                pressHandler={() => { }}
                color={styles.$blueColor}
                label="Orange"
            />
            <ThemeItem
                pressHandler={() => { }}
                color={styles.$orangeColor}
                label="Orange"
            />
            <ThemeItem
                pressHandler={() => { }}
                color={styles.$greenColor}
                label="Green"
            />
            <ThemeItem
                pressHandler={() => { }}
                color={styles.$purpleColor}
                label="Purple"
            />
        </ScrollView>
    )

}