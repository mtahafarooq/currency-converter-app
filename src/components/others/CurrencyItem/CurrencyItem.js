import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles'
import PropTypes from "prop-types";

import Icon from 'react-native-vector-icons/Ionicons';

import { CardPanel } from '../../common/CardPanel';
import { Label } from '../../common/Label';
import Images from "../../../assets/images";

const CurrencyItem = ({ label, pressHandler, isFavourite, handleFavourite }) => {
    return (
        <CardPanel pressHandler={pressHandler}>
            <Label label={label} />
            <TouchableOpacity onPress={() => handleFavourite(label)}>
                <Image resizeMode="contain" source={isFavourite ? Images.filledHeart : Images.emptyHeart} />
            </TouchableOpacity>
        </CardPanel>
    );
};
CurrencyItem.propTypes = {
    label: PropTypes.string,
    pressHandler: PropTypes.func,
    isFavourite: PropTypes.bool,
    handleFavourite: PropTypes.func
};
export default CurrencyItem;