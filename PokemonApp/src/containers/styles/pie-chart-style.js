import {StyleSheet} from "react-native";
import {Dimensions} from 'react-native';


const screenWidth = Math.round(Dimensions.get('window').width);

export default  StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  bar: {
    marginTop: 10,
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});
