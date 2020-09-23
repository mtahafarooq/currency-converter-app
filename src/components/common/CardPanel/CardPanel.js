import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import styles from './styles'
import PropTypes from "prop-types";


const CardPanel = ({ pressHandler, children }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => { pressHandler() }}>
            {children}
        </TouchableOpacity >
    );
}
CardPanel.propTypes = {
    pressHandler: PropTypes.func,
    children: PropTypes.any
};
export default CardPanel;