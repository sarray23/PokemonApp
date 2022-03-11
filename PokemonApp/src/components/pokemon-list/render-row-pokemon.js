import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import Types from "../pokemon-types/types";
import styles from "../../containers/styles/pokemons-style";
import {getRgbaColor} from "../../utils";

function pokemonItem({item, navigate}) {
    const index = (item.game_indices[0]).game_index
    let index_string = ((item.game_indices[0]).game_index).toString();
    let pokemon_index;
    //output for index 1 is #001
    if (index < 10) pokemon_index = "#00" + index_string
    if (index > 10 && index < 100) pokemon_index = "#0" + index_string;
    if (index > 99) pokemon_index = "#" + index_string;
    let backgroundColor = getRgbaColor(item.types[0].type.name);

    return (
        <TouchableHighlight underlayColor="transparent" onPress={()=>navigate(item, pokemon_index)}
                            style={[styles.rowContent, {backgroundColor: backgroundColor}]}>
            <View style={[styles.rowTouch]}>
                <Image source={{uri: item.sprites.other.home.front_default}}
                       resizeMode="cover"
                       style={styles.pokemonImage}/>
                <Text style={styles.name}>{((item.name).charAt(0)).toUpperCase()}{(item.name).slice(1)} </Text>
                <Text style={styles.name}>{pokemon_index} </Text>
                <Types types={item.types}/>
            </View>
        </TouchableHighlight>
    );
}


export default pokemonItem
