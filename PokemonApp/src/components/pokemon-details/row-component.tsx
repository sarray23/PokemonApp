import React from 'react';
import {View, Text} from 'react-native'
import styles from "../../containers/styles/pokemon-details";

interface Props {
    backgroundColor: string,
    type: string,
    details: any
}

const Row : React.FC<Props> = (props) => {
    return (
        <View style={[styles.content, {backgroundColor: props.backgroundColor}]}>
            <Text style={styles.title}>{props.type}</Text>
            {props.details}
        </View>
    );
}

export default Row
