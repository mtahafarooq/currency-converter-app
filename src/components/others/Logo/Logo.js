import React from "react";
import { View, Image, Text, ImageBackground } from "react-native";
import Images from "../../../assets/images";

import { styles } from "./styles";

const Logo = ({ isKeyboardOpen }) => (
    <View style={styles(isKeyboardOpen).container}>
        <ImageBackground resizeMode="contain" style={styles(isKeyboardOpen).containerImage} source={Images.background}>
            <Image resizeMode="contain" style={styles(isKeyboardOpen).innerImage} source={Images.logo} />
        </ImageBackground>
        <Text style={styles(isKeyboardOpen).logoText}>Currency Converter</Text>
    </View>
);

export default Logo;
