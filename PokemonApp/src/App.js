import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {View, Text, FlatList, TouchableOpacity, StatusBar} from 'react-native';
import SplashScreen from "./containers/splash-screen";
import {store} from './redux/store';
import RootNavigator from './navigation/RootNavigator';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
StatusBar.setHidden(true);
const[loading, setLoading] = useState(true)

useEffect(() => {
   setTimeout(()=>setLoading(false), 2000);
 }, []);

return(
 loading? <SplashScreen/>:
          <Provider store={store}>
             <RootNavigator />
          </Provider> )}

export default App;

