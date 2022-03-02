import {StyleSheet} from "react-native";

export default  StyleSheet.create({
container:{
   width: "100%",
   height: 100,
   justifyContent: "center",
   shadowColor: "#000",
   shadowOffset: {
      	width: 0,
        height: 3,
   },
   alignItems: "center",
   shadowOpacity: 0.29,
   shadowRadius: 4.65,
   flexDirection: "row",
   elevation: 7,
   marginBottom: 25
},

title:{
   fontSize: 20,
   fontWeight: "bold",
   color: "#E893C2" ,
   alignSelf: "center",
   paddingTop: 15

  }

});
