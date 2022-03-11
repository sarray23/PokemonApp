import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native'
import styles from "../../containers/styles/pokemon-details";
import Icon from "react-native-vector-icons/FontAwesome5";

const StatsView = (props) => {
    return (
        <TouchableHighlight underlayColor="transparent" onPress={props.displayModal} style={[styles.statsView,
            {backgroundColor: props.backgroundColor}]}>
            <View style={styles.statsViewContent}>
                <Text style={styles.statsTitle}>Stats</Text>
                <Icon name="caret-right" size={20} style={{right: 25}}/>
            </View>
        </TouchableHighlight>
    );

}

export default StatsView
