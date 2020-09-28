import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '$white',
        width: '100%',
        borderRadius: 5,
        marginVertical: 10
    },
    label: {
        color: '$primaryBlue',
        fontFamily: "Roboto-Medium",
        "@media android": {
            fontFamily: "Roboto-Medium",
        },
        fontSize: 17,
        fontWeight: "600",
        fontStyle: "normal",
    },
    leftButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRightColor: '$lightGray',
        borderRightWidth: 1,
        paddingHorizontal: 10,
        width: '20%'

    },
    textInput: {
        width: '80%',
        paddingHorizontal: 20
    }
});
