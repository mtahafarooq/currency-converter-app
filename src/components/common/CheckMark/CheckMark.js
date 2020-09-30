import React from 'react';
import { View } from 'react-native';
import styles from './styles'

import Icon from 'react-native-vector-icons/Ionicons';

import PropTypes from "prop-types";


const CheckMark = ({ color, checked }) => {
    const conatinerStyle = [styles.container]
    if (color) {
        conatinerStyle.push({ backgroundColor: color })
    }
    return (
        <View testID={'circle'} style={conatinerStyle}>
            {checked ? <Icon name={"checkmark-outline"} size={20} color={styles.$WHITE} /> : null}
        </View >
    );
}
CheckMark.propTypes = {
};

export default CheckMark;