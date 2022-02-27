import React  from 'react';
import {View, Text, Image} from 'react-native';
import LoaderKit from 'react-native-loader-kit'

const url = '../assets/splashscreen.png';


const SplashScreen = () => {
return(
  <View style={{flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: "#fff"}}>

          <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
             <Text>Loading</Text>
              <LoaderKit style={{ width: 50, height: 50, marginLeft: 15 }}
                         name={'BallPulse'}
                         size={50}
                         color={'red'}
                 />
           </View>

  </View>
 )}



export default SplashScreen;


