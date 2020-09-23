import React from 'react';
import { View } from 'react-native';
import styles from './styles'
import PropTypes from "prop-types";

import Icon from 'react-native-vector-icons/Ionicons';

import { CardPanel } from '../../common/CardPanel';
import { Label } from '../../common/Label';
import { CheckMark } from '../../common/CheckMark';


const ThemeItem = ({ label, color, pressHandler }) => {
    return (
        <CardPanel pressHandler={pressHandler}>
            <Label label={label} />
            <CheckMark color={color} />
        </CardPanel>
    );
};
ThemeItem.propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
    pressHandler: PropTypes.func
};
export default ThemeItem;