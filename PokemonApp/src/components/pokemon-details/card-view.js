import React from 'react';
import {View, Image, TouchableHighlight} from 'react-native'
import styles from "../../containers/styles/pokemon-details";

const CardView = (props) => {
    return (
        <View style={[styles.cardView, {backgroundColor: props.backgroundColor}]}>
            <TouchableHighlight underlayColor="transparent" onPress={props.navigate} style={styles.backView}>
                <Image source={require("../../assets/images/back.png")} style={{width: 35, height: 35}}/>
            </TouchableHighlight>

            <Image source={{uri: props.pokemonImage}}
                resizeMode="cover"
                style={styles.pokemonImage}/>
        </View>
    );

}

export default CardView
