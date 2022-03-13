import React from 'react';
import {View, Text} from 'react-native'
import styles from "../styles/type-view-style";

interface Props {
    ability: string,
    color: string
}

const AbilityView: React.FC<Props> = (props) => {
    return (
        <View style={[styles.container, {backgroundColor: props.color}]}>
            <Text style={styles.type}>{((props.ability).charAt(0)).toUpperCase()}{(props.ability).slice(1)}</Text>
        </View>
    );
}

export default AbilityView
