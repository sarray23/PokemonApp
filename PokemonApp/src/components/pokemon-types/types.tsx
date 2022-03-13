//list of types
import React from 'react';
import {FlatList} from 'react-native'
import {getTypeColor} from "../../utils";
import TypeView from "../pokemon-type-view/type-view";
import{Pokemon} from "../../types/pokemon";

interface Props {
    types:Pokemon["types"],
}

const Types: React.FC<Props>  = (props) => {

    return (
        <FlatList data={props.types}
            horizontal={true}
            renderItem={({item}) => {
                const typeColor = getTypeColor(item.type.name);
                return (<TypeView color={typeColor} type={item.type.name}/>
                )
            }}
        />
    );
}

export default Types
