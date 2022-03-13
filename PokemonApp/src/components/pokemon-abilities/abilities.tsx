//list of abilities
import React from 'react';
import {FlatList} from 'react-native'
import {getRandomColor} from "../../utils";
import AbilityView from "./pokemon-abilities-view";
import{Pokemon} from "../../types/pokemon";

interface Props {
    abilities: Pokemon["abilities"],

}

const Abilities: React.FC<Props> = (props) => {
    return (
        <FlatList data={props.abilities}
            horizontal={true}
            renderItem={({item}) => {
                const name : string = item.ability.name
                return (<AbilityView color={getRandomColor()} ability={name} />
                )
            }}/>
    );

}

export default Abilities
