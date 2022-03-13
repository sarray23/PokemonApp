import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector, RootStateOrAny} from 'react-redux';
import Header from "../components/Header/header";
import Icon from "react-native-vector-icons/FontAwesome5";
import {getPokemons} from '../redux/actions';
import styles from "./styles/pokemons-style";
import PokemonItem from "../components/pokemon-list/render-row-pokemon";
import SplashScreen from "./splash-screen";
import { check_sort }from "../utils/sortList";
import { NavigationScreenProp } from 'react-navigation';
import Pokemon from '../types/pokemon';

let pokemonsList : [] = [];

const Pokemons = ({navigation}: { navigation: NavigationScreenProp<any, any> }) => {
    const [selectedId, setSelectedId] = useState(false);
    const [direction, setDirection] = useState("DEFAULT");
    const [displayReset, setReset] = useState(false);
    const [offset, setOffset] = useState(0);

    const flatList = useRef<FlatList>(null);

    const {pokemons} = useSelector((state: RootStateOrAny) => state.pokemonsReducer);
    const dispatch = useDispatch();
    const fetchPokemons = useCallback(async () => {
        await dispatch(getPokemons(offset));
    }, [offset, dispatch]);

    pokemonsList = pokemons.slice();
    check_sort(pokemonsList, direction)

    useEffect(() => {
        setSelectedId(true);
        fetchPokemons();
    }, [offset, fetchPokemons]);

    return (
        <View style={styles.container}>
            <Header title="POKEMON" backgroundColor="#fff" displayIconBack={false} nav={function (): void {
                throw new Error('Function not implemented.');
            }}/>
            {pokemons.length > 0 ?
                <View style={styles.filter}>
                    <Icon size={29} color="#65ABE5"
                        name={(direction === "DESC") ? "sort-amount-down" : "sort-amount-up"}
                        onPress={() => {
                            if (direction === "DESC")
                                sortList("ASC")
                            else sortList("DESC")
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
        flatList.current?.scrollToIndex({animated: true, index: 0})
    }

    function setDefault() {
        setOffset(0);
        scrollToTop()
        setDirection("DEFAULT");
        setReset(false);
    }

    function sortList (newDirection: string) {
        setReset(true);
        setDirection(newDirection);
        scrollToTop();
    }

    function navigateToDetails(item: Pokemon, pokemon_index: string) {
        navigation.navigate("PokemonDetails", {
            pokemon: item,
            index: pokemon_index
        })
    }
};

export default Pokemons;
