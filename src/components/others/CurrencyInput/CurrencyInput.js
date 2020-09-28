import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import { connect } from 'react-redux';

import PropTypes from "prop-types";

import styles from "./styles";

const CurrencyInput = ({ onCurrencySelect, label, value, onInputChange, selectedTheme }) => {
    const labelStyle = [styles.label]
    if (selectedTheme != null || selectedTheme != undefined) {
        labelStyle.push({ color: selectedTheme.code })
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { onCurrencySelect() }} style={styles.leftButton}>
                <Text style={labelStyle}>{label}</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                value={value}
                onChangeText={(text) => { onInputChange(text) }}
            />
        </View>
    )
}
CurrencyInput.propTypes = {
    onCurrencySelect: PropTypes.func,
    label: PropTypes.string,
    value: PropTypes.string,
    onInputChange: PropTypes.func
};
const mapStateToProps = (state) => {
    const props = {
        selectedTheme: state.theme.selectedTheme
    }
    return props;
}
export default connect(
    mapStateToProps,
)(CurrencyInput);