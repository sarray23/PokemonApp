import React from 'react';
import {Provider} from 'react-redux';
import { StatusBar} from 'react-native';
import {store} from './redux/store';
import RootNavigator from './navigation/RootNavigator';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
StatusBar.setHidden(true);


return(
          <Provider store={store}>
             <RootNavigator />
          </Provider> )}

export default App;

