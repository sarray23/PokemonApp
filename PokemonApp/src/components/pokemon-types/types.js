import React, {useEffect} from 'react';
import {FlatList} from 'react-native'
import { getRgbaColor } from "../../utils";
import TypeView from "../pokemon-type-view/type-view";

const Types = (props) => {

return (
   <FlatList data={props.types}
             horizontal = {true}
             renderItem={({item}) => {
                         let typeColor=getRgbaColor(item.type.name,',0.5');
                         return(<TypeView color= {typeColor} type={item.type.name} />
                             ) }}
          />
   );
   }

export default Types
