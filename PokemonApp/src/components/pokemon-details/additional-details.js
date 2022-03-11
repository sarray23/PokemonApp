import React from 'react';
import {View, Text} from 'react-native'
import styles from "../../containers/styles/pokemon-details";

const PokemonAdditionalDetails = (props) => {
    return (
        <View style={[styles.otherDetails, {backgroundColor: props.backgroundColor}]}>
            <View style={styles.titles}>
                <Text style={styles.subtitle}>Weight</Text>
                <Text style={styles.subtitle}>Height</Text>
            </View>
            <View style={styles.titles}>
                <Text style={styles.subtitleValue}>{Math.round(props.weight) / 10}kg</Text>
                <Text style={styles.subtitleValue}>{Math.round(props.height) / 10}m</Text>
            </View>
        </View>
    );

}

export default PokemonAdditionalDetails
