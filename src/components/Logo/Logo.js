import React from "react";
import { View, Image, Text, ImageBackground } from "react-native";
import Images from "../../assets/images";

import styles from "./styles";

const Logo = () => (
    <View style={styles.container}>
        <ImageBackground resizeMode="contain" style={styles.containerImage} source={Images.background}>
            <Image resizeMode="contain" style={styles.innerImage} source={Images.logo} />
        </ImageBackground>
        <Text>Currency Converter</Text>
    </View>
);

export default Logo;
