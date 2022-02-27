import React, {useEffect, useState, useRef} from 'react';
import {View, Text, FlatList, Image, Dimensions,  TouchableOpacity, TouchableHighlight } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Header from "../components/Header/header";
import Types from "../components/pokemon-types/types";
import { getRgbaColor } from "../utils";
import Icon from "react-native-vector-icons/FontAwesome5";
import {getPokemons} from '../redux/actions';
import styles from "./styles/pokemons-style";

let limit = 0;
let pokemonsTab= [];

const Pokemons = ({navigation, route}) => {

const [selectedId, setSelectedId] = useState(null);
const [direction, setDirection] = useState(-1);
const [displayReset, setReset] = useState(null);

const {pokemons} = useSelector(state => state.pokemonsReducer);
const dispatch = useDispatch();
const fetchPokemons= () => dispatch(getPokemons(limit));
pokemonsTab = pokemons;
const flatList = useRef();


const setDefault = () =>{
     limit=0;
     setDirection(-1)
     fetchPokemons();
     setReset(false);
 }


const sortListDES = () => {
      setReset(true);
      flatList.current.scrollToIndex({ index: 0, })
      setDirection(0);
      pokemons.sort((obj1, obj2) => {
           return ((obj2.game_indices[0]).game_index- (obj1.game_indices[0]).game_index);
         });
     };


const sortListASC = () => {
      setReset(true);
      setDirection(1);
      pokemons.sort((obj1, obj2) => {
        return ((obj1.game_indices[0]).game_index- (obj2.game_indices[0]).game_index);
      });
    };

const loadMorePokemons = () =>{
      limit = limit + 20  ;
      fetchPokemons()
    }

function navigateToDetails(item, pokemon_index){
   navigation.navigate("PokemonDetails", { pokemon:item, bgColor: item.types[0].type.name, index: pokemon_index})
}

useEffect(() => {
    fetchPokemons();
    setSelectedId(1)
  }, []);

function renderItem (item) {
   const index = (item.game_indices[0]).game_index
   let index_string=((item.game_indices[0]).game_index).toString();
   let pokemon_index;
   if(index<10) pokemon_index="#00"+index_string
   if (index>10&&index<100) pokemon_index="#0"+index_string;
   if (index>99) pokemon_index="#"+index_string ;
   let backgroundColor= getRgbaColor(item.types[0].type.name,',0.5');

   return (
      <TouchableHighlight underlayColor="transparent"  onPress={()=>{navigateToDetails(item, pokemon_index)}}>
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


return (
 <View style={styles.container}>
     <Header title= "POKEMON" bgColor= "#fff" displayIconBack={false}/>
     <View style={styles.filter}>
        <Icon size={29}color="#65ABE5" name={(direction===1)?"sort-amount-down": "sort-amount-up"}  onPress={
        (direction===1)
        ?sortListDES:sortListASC}/>
       {displayReset? <Text style={styles.reset} onPress={()=> setDefault()}>Reset</Text> :null}
     </View>
     <FlatList style={{flex: 1}}
               numColumns={2}
               data={pokemonsTab}
               extraData={selectedId}
               ref={flatList}
               onEndReachedThreshold={0.8}
               keyExtractor={item => item.name}
               renderItem={({item, index}) => renderItem(item, index)}
               onEndReached={loadMorePokemons}
               showsVerticalScrollIndicator={false}
        />
    </View>
  );
};

export default Pokemons;
