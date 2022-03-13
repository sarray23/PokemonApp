import React from 'react';
import {Provider} from 'react-redux';
import { StatusBar } from 'react-native';
import {store} from './redux/store';
import RootNavigator from './navigation/RootNavigator';

const App = () => {
    StatusBar.setHidden(true);

    return(
        <Provider store={store}>
            <RootNavigator />
        </Provider> )}

export default App;

