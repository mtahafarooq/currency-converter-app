import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from "react-native";

import PropTypes from "prop-types";

import styles from "./styles";

const CurrencyInput = ({ onCurrencySelect, label, value, onInputChange, selectedTheme }) => {
    const labelStyle = [styles.label]
    if (selectedTheme != null || selectedTheme != undefined) {
        labelStyle.push({ color: selectedTheme.code })
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity testID={'currency-select'} onPress={() => { onCurrencySelect() }} style={styles.leftButton}>
                <Text testID={'currency-label'} style={labelStyle}>{label}</Text>
            </TouchableOpacity>
            <TextInput
                testID={'currency-input'}
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
    onInputChange: PropTypes.func,
    selectedTheme: PropTypes.object
};

export default CurrencyInput;