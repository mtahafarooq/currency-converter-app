import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
    $WHITE: "$white",
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 25,
        width: 25,
        borderRadius: 12.5,
        backgroundColor: '$primaryBlue'
    }
});
export default styles;
