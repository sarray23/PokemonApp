import React  from 'react';
import {View, Text} from 'react-native';
import Loader from "../components/Loader/loader"

interface Props {
    name: string,
    color: string
}

const SplashScreen: React.FC<Props>  = () => {
    return(
        <View style={{flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: "#fff"}}>
            <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <Text>Loading</Text>
                <Loader name='BallPulse' color="red" />
            </View>
        </View>
    )}



export default SplashScreen;


