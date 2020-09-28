import { Dimensions } from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";

const { width } = Dimensions.get('window');

const imageSize = width / 2;
const imageResize = width / 2.5
export default EStyleSheet.create({

});

export const styles = (isKeyboardOpen = false) => EStyleSheet.create({
    container: {
        alignItems: 'center',

    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        height: isKeyboardOpen ? imageResize : imageSize,
        width: isKeyboardOpen ? imageResize : imageSize
    },
    innerImage: {
        width: isKeyboardOpen ? imageResize / 2 : imageSize / 2
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
})