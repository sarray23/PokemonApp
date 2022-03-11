import React, {useState} from 'react';
import {ScrollView, Text, View} from "react-native";
import Types from "../components/pokemon-types/types"
import Abilities from "../components/pokemon-abilities/abilities"
import PieChart from "./PieChart";
import {getTypeColor} from "../utils";
import styles from "./styles/pokemon-details";
import {CardView, PokemonAdditionDetails, Row, StatsView} from '../components/pokemon-details';

const PokemonDetails = ({navigation, route}) => {
//get params sent from navigation
    const pokemon = route.params.pokemon;
    const index = route.params.index;
    const [modalVisible, setModalVisible] = useState(false);

    const backgroundColor = getTypeColor(pokemon.types[0].type.name);

    //display pokemon types by returning types component
    const display_types = (pokemon) => {
        return <Types types={pokemon.types}/>
    }
    //display pokemon abilities by returning abilities component
    const display_abilities = (pokemon) => {
        return <Abilities abilities={pokemon.abilities}/>
    }

    return (
        <ScrollView style={styles.scrollViewStyle}>
            <View style={styles.container}>
                {/* this component displays the image of the pokemon */}
                <CardView navigate={() => {
                    navigation.goBack()
                }}
                backgroundColor={backgroundColor}
                pokemonImage={pokemon.sprites.other.home.front_default}/>
                <Text
                    style={styles.pokemonName}>{index} {((pokemon.name).charAt(0)).toUpperCase()}{(pokemon.name).slice(1)}</Text>

                <View style={styles.pokemonDetails}>
                    {/* this component displays the types of the selected  pokemon */}

                    <Row details={display_types(pokemon)}
                        backgroundColor={backgroundColor}
                        type="Type"/>
                    {/* this component displays the abilities of the selected pokemon */}

                    <Row details={display_abilities(pokemon)}
                        backgroundColor={backgroundColor}
                        type="Abilities"/>
                    {/* this component displays the weight and height of the selected pokemon */}
                    <PokemonAdditionDetails backgroundColor={backgroundColor}
                        weight={pokemon.weight}
                        height={pokemon.height}/>
                    {/* this component displays the navigation to the stats of the selected pokemon */}
                    <StatsView displayModal={() => {
                        setModalVisible(true)
                    }}
                    backgroundColor={backgroundColor}/>
                </View>
                {/* this component will be displayed when modal is visible */}
                <PieChart pokemon={pokemon} modalVisible={modalVisible} hideModal={() => {
                    setModalVisible(!modalVisible)
                }}/>
            </View>
        </ScrollView>
    );
};


export default PokemonDetails;



