import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
    $WHITE: "$white",
    container: {
        alignItems: 'flex-end',
        position: 'absolute',
        '@media ios': {
            top: 35
        },
        '@media android': {
            top: 10
        },
        right: '5%',
        left: '5%'
    }
});
