import React from 'react';
import {View, Text,  Image,  TouchableHighlight } from 'react-native';
import Types from "../pokemon-types/types";
import { getRgbaColor } from "../../utils";
import styles from "../../containers/styles/pokemons-style";

function pokemonItem ({item, backgroundColor, pokemon_index, navigate}) {

   return (
      <TouchableHighlight underlayColor="transparent"  onPress={navigate}>
         <View style={[styles.rowContent, {backgroundColor: backgroundColor}]}>
            <Image source={{uri: item.sprites.other.home.front_default}}
                   resizeMode="cover"
                   style={styles.pokemonImage} />
             <Text style={styles.name}>{((item.name).charAt(0)).toUpperCase()}{(item.name).slice(1)} </Text>
             <Text style={styles.name}>{pokemon_index} </Text>
             <Types types={item.types}/>
          </View>
       </TouchableHighlight>
     );
   }


export default pokemonItem
