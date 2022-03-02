//list of abilities
import React, {useEffect} from 'react';
import {FlatList} from 'react-native'
import { getRandomColor } from "../../utils";
import TypeView from "../pokemon-type-view/type-view";

const Abilities = (props) => {
   return (
          <FlatList data={props.abilities}
                    horizontal = {true}
                    renderItem={({item}) => {
                    return(<TypeView color= {getRandomColor()} type={item.ability.name} />
                   )
              }} />

   );

}

export default Abilities
