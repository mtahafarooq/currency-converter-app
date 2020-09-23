import { Dimensions } from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";

const { width } = Dimensions.get('window');

const imageSize = width / 2;

export default EStyleSheet.create({
    container: {
        alignItems: 'center',

    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        height: imageSize,
        width: imageSize
    },
    innerImage: {
        width: imageSize / 2
    },
    logoText: {
        fontFamily: "Roboto",
        "@media android": {
            fontFamily: "Roboto-Bold",
        },
        fontSize: 22,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "$white"
    }
});
