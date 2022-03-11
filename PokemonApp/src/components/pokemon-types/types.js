//list of types
import React from 'react';
import {FlatList} from 'react-native'
import {getTypeColor} from "../../utils";
import TypeView from "../pokemon-type-view/type-view";

const Types = (props) => {

    return (
        <FlatList data={props.types}
                  horizontal={true}
                  renderItem={({item}) => {
                      let typeColor = getTypeColor(item.type.name);
                      return (<TypeView color={typeColor} type={item.type.name}/>
                      )
                  }}
        />
    );
}

export default Types
