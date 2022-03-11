import {StyleSheet} from "react-native";
import Metrics from "../../theme/metrics";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center"
    },

    filter: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: 'flex-end',
        margin: 10
    },

    reset: {
        color: "#65ABE5",
        fontSize: 16,
        fontWeight: "bold",
        paddingLeft: 10,
        textDecorationLine: 'underline',

    },
    rowTouch:{
        alignSelf: "flex-start",
        justifyContent: "center",
        alignItems: "center",

        width: Metrics.width / 2 - 10,
    },

    rowContent: {
        alignSelf: "flex-start",
        flexDirection: 'column',
        marginBottom: 30,
        opacity: 1.6,
        width: Metrics.width / 2 - 10,
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 16,
        paddingBottom: 15,
    },

    pokemonImage: {
        width: 100,
        opacity: 1,
        alignSelf: "center",
        zIndex: 1,
        height: 110,
        borderRadius: 10
    },

    name: {
        fontWeight: "bold",
        fontSize: 14,
        padding: 3,
        color: "#fff",


    }


});
