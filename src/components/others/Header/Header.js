import React from "react";
import { View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import Icon from 'react-native-vector-icons/Ionicons';

import styles from "./styles";

const Header = ({ handlePress }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => { handlePress() }}>
            <Icon name="ios-settings-outline" size={20} color={styles.$WHITE} />
        </TouchableOpacity>
    </View>
);
Header.prototype = {
    handlePress: PropTypes.func
};
export default Header;
