import React from 'react';
import {View, Text} from 'react-native'
import styles from "../../containers/styles/pokemon-details";

const Row = (props) => {
    return (
        <View style={[styles.content, {backgroundColor: props.backgroundColor}]}>
            <Text style={styles.title}>{props.type}</Text>
            {props.details}
        </View>
    );
}

export default Row
