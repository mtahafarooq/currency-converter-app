import React from 'react';
import { View } from 'react-native';
import styles from './styles'
import PropTypes from "prop-types";

import Icon from 'react-native-vector-icons/Ionicons';

import { CardPanel } from '../../common/CardPanel';
import { Label } from '../../common/Label';

const OptionItem = ({ label, icon, pressHandler }) => {
    return (
        <CardPanel pressHandler={pressHandler}>
            <Label label={label} />
            <Icon name={icon} size={20} />
        </CardPanel>
    );
};
OptionItem.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    pressHandler: PropTypes.func
};
export default OptionItem;