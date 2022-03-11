import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from "../components/Header/header";
import Icon from "react-native-vector-icons/FontAwesome5";
import {getPokemons} from '../redux/actions';
import styles from "./styles/pokemons-style";
import PokemonItem from "../components/pokemon-list/render-row-pokemon";
import SplashScreen from "./splash-screen";

let pokemonsList = []

const Pokemons = ({navigation}) => {
    const [selectedId, setSelectedId] = useState(false);
    const [direction, setDirection] = useState(-1);
    const [displayReset, setReset] = useState(false);
    const [offset, setOffset] = useState(0);

    const flatList = useRef();

    const {pokemons} = useSelector(state => state.pokemonsReducer);
    const dispatch = useDispatch();
    const fetchPokemons = useCallback(async () => {
        await dispatch(getPokemons(offset, direction));
    }, [offset, dispatch]);

    pokemonsList = pokemons.slice();

    if (direction === 1) pokemonsList.sort((obj1, obj2) => {
        return ((obj1.game_indices[0]).game_index - (obj2.game_indices[0]).game_index);
    });
    if (direction === 0) pokemonsList.sort((obj1, obj2) => {
        return ((obj2.game_indices[0]).game_index - (obj1.game_indices[0]).game_index);
    });

    useEffect(() => {
        setSelectedId(true);
        fetchPokemons();
        // this will clear Timeout
        // when component unmount like in willComponentUnmount
        // and show will not change to true
    }, [offset, fetchPokemons]);
    //load more data when end list is reached

    //navigation to the details screen with params

    return (
        <View style={styles.container}>
            <Header title="POKEMON" backgroundColor="#fff" displayIconBack={false}/>
            {pokemons.length > 0 ?
                <View style={styles.filter}>
                    <Icon size={29} color="#65ABE5" name={(direction === 1) ? "sort-amount-down" : "sort-amount-up"}
                        onPress={() => {
                            if (direction === 1)
                                sort(0)
                            else sort(1)
                        }}
                    />{displayReset ?
                        <Text style={styles.reset} onPress={() => setDefault()}>Reset</Text> : null}
                </View> : null}
            {pokemons.length === 0 ? <SplashScreen name="BallSpinFadeLoader" color="#65ABE5"/>
                :
                <FlatList style={{flex: 1}}
                    numColumns={2}
                    data={pokemonsList}
                    extraData={selectedId}
                    ref={flatList}
                    onEndReachedThreshold={0.01}
                    keyExtractor={(item) => Math.random() + item.id}
                    renderItem={({item}) => {
                        return <PokemonItem item={item}
                            navigate={(item, pokemon_index) => {
                                navigateToDetails(item, pokemon_index)
                            }}
                        />
                    }}
                    onEndReached={loadMorePokemons}
                    showsVerticalScrollIndicator={false}
                />}
        </View>
    );

    function loadMorePokemons () {
        setOffset(offset + 20);
    }

    function scrollToTop ()  {
        flatList.current.scrollToIndex({animated: true, index: 0})
    }

    //reset sort
    function setDefault () {
        setOffset(0);
        scrollToTop()
        setDirection(-1);
        setReset(false);
    }

    //sort list ASC
    function sort (val) {
        setReset(true);
        setDirection(val);
        scrollToTop();
    }
    function navigateToDetails(item, pokemon_index) {
        navigation.navigate("PokemonDetails", {
            pokemon: item,
            index: pokemon_index
        })
    }

};

export default Pokemons;
