import React, {useState} from 'react';
import {TouchableHighlight, ScrollView, Button,Image, StyleSheet, Dimensions, Text, View} from "react-native";
import Header from "../components/Header/header";
import TypeView from "../components/pokemon-type-view/type-view";
import Types from "../components/pokemon-types/types"
import Abilities from "../components/pokemon-abilities/abilities"
import PieChart from "./PieChart";
import {getRgbaColor} from "../utils";
import styles from "./styles/pokemon-details";
import Icon from "react-native-vector-icons/FontAwesome5";

const PokemonDetails = ({navigation, route}) => {
const pokemon = route.params.pokemon;
const index = route.params.index;
const bgColor = route.params.bgColor;
const screenWidth = Math.round(Dimensions.get('window').width);
const [modalVisible, setModalVisible] = useState(false);
const [selectedStartDate, setSelectedStartDate] = useState(null);

const display_types = (pokemon) => {
  return <Types types={pokemon.types}/>
}

const display_abilities=(pokemon)=>{
  return <Abilities abilities={pokemon.abilities}/>
}

return (
 <ScrollView style= {{flex: 1}}>
    <View style={styles.container}>
    <View style={[styles.cardView, {backgroundColor:getRgbaColor(bgColor,',0.6')}]}>
       <TouchableHighlight underlayColor="transparent" onPress={()=>{navigation.goBack()}} style={styles.backView}>
          <Image source={require("../assets/images/back.png")} style={{width: 35, height: 35}} />
       </TouchableHighlight >

       <Image source={{uri: pokemon.sprites.other.home.front_default}}
              resizeMode="cover"
               style={styles.pokemonImage}/>
    </View>
   <Text style={styles.pokemonName}>{index} {((pokemon.name).charAt(0)).toUpperCase()}{(pokemon.name).slice(1)}</Text>

   <View style={styles.pokemonDetails}>
      <Row details={display_types(pokemon)}
           bgColor={ getRgbaColor(bgColor,',0.2')}
           type="Type"/>

      <Row details={display_abilities(pokemon)}
                  bgColor={ getRgbaColor(bgColor,',0.2')}
                  type="Abilities"/>

     <View style={[styles.otherDetails, {backgroundColor: getRgbaColor(bgColor,',0.2')}]}>
         <View style={styles.titles}>
             <Text style={styles.subtitle}>Weight</Text>
             <Text style={styles.subtitle}>Height</Text>
         </View>
         <View style={styles.titles}>
          <Text style={styles.subtitleValue}>{Math.round(pokemon.weight)/10}kg</Text>
           <Text style={styles.subtitleValue}>{Math.round(pokemon.height)/10}m</Text></View>
      </View>
       <TouchableHighlight underlayColor="transparent" onPress={()=>{setModalVisible(true)}} style={[styles.statsView,
       {backgroundColor:getRgbaColor(bgColor,',0.2')}]}>
         <View style={{flexDirection: "row", alignItems: "center",justifyContent: "space-between",}}>
             <Text style={styles.statsTitle}>Stats</Text>
             <Icon name="caret-right" size={20} style={{right: 25}}/>
         </View>
        </TouchableHighlight>
      </View>
       <PieChart pokemon = {pokemon} modalVisible={modalVisible} hideModal={()=>{setModalVisible(!modalVisible)}} />
   </View>
   </ScrollView>
  );
};


export default PokemonDetails;


const Row = (props) => {
   return (
     <View style={[styles.content, {backgroundColor:props.bgColor}]}>
          <Text style={styles.title}>{props.type}</Text>
         {props.details}
      </View>
       );
   }
