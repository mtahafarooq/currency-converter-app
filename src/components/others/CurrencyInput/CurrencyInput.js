import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const CurrencyInput = ({ onCurrencySelect, label, value, onInputChange }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { onCurrencySelect() }} style={styles.leftButton}>
                <Text style={styles.label}>{label}</Text>
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
export default CurrencyInput;