import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({

    labelText: {
        fontFamily: "Roboto-Light",
        "@media android": {
            fontFamily: "Roboto-Light",
        },
        fontSize: 17,
        fontWeight: "300",
        fontStyle: "normal",
        color: "$black"
    },

});

export default styles;
