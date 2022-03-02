import React, {useEffect, useState, useRef} from 'react';
import {View, Text, FlatList } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Header from "../components/Header/header";
import Types from "../components/pokemon-types/types";
import { getRgbaColor } from "../utils";
import Icon from "react-native-vector-icons/FontAwesome5";
import {getPokemons} from '../redux/actions';
import styles from "./styles/pokemons-style";
import PokemonItem from "../components/pokemon-list/render-row-pokemon";
import Loader from "../components/Loader/loader";

let limit = 30;
let pokemonsTab= [];

const Pokemons = ({navigation, route}) => {

const [selectedId, setSelectedId] = useState(false);
const [isLoading, setLoading] = useState(true);

const [direction, setDirection] = useState(-1);
const [displayReset, setReset] = useState(false);

const {pokemons} = useSelector(state => state.pokemonsReducer);
const dispatch = useDispatch();
const fetchPokemons= () => dispatch(getPokemons(limit));
pokemonsTab = pokemons;
const flatList = useRef();

//reset sort
const setDefault = () =>{
     limit=0;
     setDirection(-1)
     fetchPokemons();
     setReset(false);
 }

//sort list DESC
const sortListDES = () => {
      setReset(true);
      flatList.current.scrollToIndex({ index: 0, })
      setDirection(0);
      pokemons.sort((obj1, obj2) => {
           return ((obj2.game_indices[0]).game_index - (obj1.game_indices[0]).game_index);
         });
     };

//sort list ASC
const sortListASC = () => {
      setReset(true);
      setDirection(1);
      flatList.current.scrollToIndex({ index: 0, })
      pokemons.sort((obj1, obj2) => {
        return ((obj1.game_indices[0]).game_index- (obj2.game_indices[0]).game_index);
      });
    };
//load more data when end list is reached
const loadMorePokemons = () =>{

      limit = limit + 30  ;
       setSelectedId(true);
      fetchPokemons()  ;
      pokemonsTab =    pokemons
    }

//navigation to the details screen with params
function navigateToDetails(item, pokemon_index){
   navigation.navigate("PokemonDetails", { pokemon:item, backgroundColor: item.types[0].type.name, index: pokemon_index})
}

useEffect(() => {
    fetchPokemons();
    setSelectedId(true);
     let timer = setTimeout(()=> setLoading(false), 2000);
      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
     return () => {
            clearTimeout(timer);
          };
  }, []);

function renderItem (item) {
   const index = (item.game_indices[0]).game_index
   let index_string=((item.game_indices[0]).game_index).toString();
   let pokemon_index;
    //output for index 1 is #001
   if(index<10) pokemon_index="#00"+index_string
   if (index>10&&index<100) pokemon_index="#0"+index_string;
   if (index>99) pokemon_index="#"+index_string ;
   let backgroundColor= getRgbaColor(item.types[0].type.name,',0.5');

   return (
      <PokemonItem item={item} navigate={()=>{navigateToDetails(item, pokemon_index, navigation)}}
                   backgroundColor={backgroundColor}
                   pokemon_index={pokemon_index}
                   />
     );
   }


return (
 <View style={styles.container}>
     <Header title= "POKEMON" backgroundColor= "#fff" displayIconBack={false}/>

  {!isLoading?
    <View style={styles.filter}>
        <Icon size={29} color="#65ABE5" name={(direction===1)?"sort-amount-down": "sort-amount-up"}  onPress={
        (direction===1)?sortListDES:sortListASC}/>{displayReset? <Text style={styles.reset} onPress={()=> setDefault()}>Reset</Text> :null}
     </View> :null}
   {isLoading? <Loader name="BallSpinFadeLoader" color="#65ABE5"/>
                    :
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
        />   }


    </View>
  );
};

export default Pokemons;
