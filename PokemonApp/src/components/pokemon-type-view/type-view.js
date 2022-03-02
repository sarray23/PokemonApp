//type row component
import React from 'react';
import {View, Text} from 'react-native'
import styles from "../styles/type-view-style";

const TypeView = (props) => {
   return (
         <View style={[styles.container,{backgroundColor: props.color}]}>
            <Text style={styles.type}>{((props.type).charAt(0)).toUpperCase()}{(props.type).slice(1)}</Text>
         </View>
   )   ;

}

export default TypeView
