import {StyleSheet} from "react-native";
import Metrics from "../../theme/metrics";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    title: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    bar: {
        marginTop: 10,
        height: Metrics.height / 2,
        width: Metrics.width
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

});
