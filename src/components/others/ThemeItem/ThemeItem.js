import React from 'react';
import { View } from 'react-native';
import styles from './styles'
import PropTypes from "prop-types";

import Icon from 'react-native-vector-icons/Ionicons';

import { CardPanel } from '../../common/CardPanel';
import { Label } from '../../common/Label';
import { CheckMark } from '../../common/CheckMark';


const ThemeItem = ({ label, color, pressHandler, checked }) => {
    return (
        <CardPanel pressHandler={() => { pressHandler({ name: label, code: color }) }}>
            <Label label={label} />
            <CheckMark
                color={color}
                checked={checked} />
        </CardPanel>
    );
};
ThemeItem.propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
    pressHandler: PropTypes.func,
    checked: PropTypes.bool
};
export default ThemeItem;