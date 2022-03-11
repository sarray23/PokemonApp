import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from "../components/Header/header";
import Icon from "react-native-vector-icons/FontAwesome5";
import {getPokemons} from '../redux/actions';
import styles from "./styles/pokemons-style";
import PokemonItem from "../components/pokemon-list/render-row-pokemon";
import SplashScreen from "./splash-screen";
import {sortList }from "../utils/sortList";

let pokemonsList = []

const Pokemons = ({navigation}) => {
    const [selectedId, setSelectedId] = useState(false);
    const [direction, setDirection] = useState("DEFAULT");
    const [displayReset, setReset] = useState(false);
    const [offset, setOffset] = useState(0);

    const flatList = useRef();

    const {pokemons} = useSelector(state => state.pokemonsReducer);
    const dispatch = useDispatch();
    const fetchPokemons = useCallback(async () => {
        await dispatch(getPokemons(offset));
    }, [offset, dispatch]);
    pokemonsList = pokemons.slice();

    sortList(pokemonsList, direction)

    useEffect(() => {
        setSelectedId(true);
        fetchPokemons();
    }, [offset, fetchPokemons]);

    return (
        <View style={styles.container}>
            <Header title="POKEMON" backgroundColor = "#fff" displayIconBack={false}/>
            {pokemons.length > 0 ?
                <View style={styles.filter}>
                    <Icon size={29} color="#65ABE5" name={(direction === "DESC") ? "sort-amount-down" : "sort-amount-up"}
                        onPress={() => {
                            if (direction === "DESC")
                                sort("ASC")
                            else sort("DESC")
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

    function loadMorePokemons() {
        setOffset(offset + 20);
    }

    function scrollToTop() {
        flatList.current.scrollToIndex({animated: true, index: 0})
    }

    function setDefault() {
        setOffset(0);
        scrollToTop()
        setDirection("DEFAULT");
        setReset(false);
    }

    function sort(newDirection) {
        setReset(true);
        setDirection(newDirection);
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
