import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pokemons from '../containers/pokemons-list';
import PokemonDetails from '../containers/pokemon-details';

const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName= "Pokemons">
                <Stack.Screen name="Pokemons " component={ Pokemons } />
                <Stack.Screen name="PokemonDetails" component={PokemonDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
