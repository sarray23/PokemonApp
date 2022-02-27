import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native'
import styles from "./styles/header-style";

const Header = (props) => {
   return (
      <View style={[styles.container, {backgroundColor: props.bgColor}]}>
       {props.displayIconBack? <TouchableHighlight underlayColor="transparent" style={{position: "absolute",alignSelf:"center" , left: 15}} onPress={props.nav}>
        <Image source={require("../../assets/images/back.png")}
               style={{width: 35,height: 35,
        }}/>
        </TouchableHighlight>
          :null}
        <Text style={styles.title}>{props.title}</Text>
      </View>

   );
}

export default Header
