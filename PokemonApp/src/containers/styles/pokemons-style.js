import {StyleSheet} from "react-native";
import {Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

export default  StyleSheet.create({
container:{
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center"
},

filter:{
 flexDirection: "row",
 alignItems: "center" ,
 alignSelf: 'flex-end',
 margin: 10
},

reset:{
   color: "#65ABE5",
   fontSize: 16,
   fontWeight: "bold",
   paddingLeft: 10,
   textDecorationLine: 'underline',

} ,

rowContent: {
   alignSelf: "flex-start",
   flexDirection: 'column',
   marginBottom: 30,
   opacity: 1.6,
   width: screenWidth/2-10,
   marginRight:  5,
   marginLeft:  5,
   justifyContent: "space-between",
   borderRadius: 16,
   paddingBottom: 15,
   paddingLeft: 10
 },

pokemonImage: {
   width: 100,
   opacity: 1,
   alignSelf: "center",
   zIndex: 1,
   height: 110,
   borderRadius: 10
},

name: {
   fontWeight: "bold",
   fontSize: 14,
   padding: 5,
   color: "#fff",


}


});
