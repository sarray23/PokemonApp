/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

import renderer from 'react-test-renderer';
 jest.mock('react-native-loader-kit', ()=>"RNLoder");


jest.mock("react-native-gesture-handler", ()=>"RNGestureHandler");
jest.mock('react-navigation', () => {
    return {
        createAppContainer: jest.fn().mockReturnValue(function NavigationContainer(props) {return null;}),
        createDrawerNavigator: jest.fn(),
        createMaterialTopTabNavigator: jest.fn(),
        createStackNavigator: jest.fn(),
        StackActions: {
            push: jest.fn().mockImplementation(x => ({...x,  "type": "Navigation/PUSH"})),
            replace: jest.fn().mockImplementation(x => ({...x,  "type": "Navigation/REPLACE"})),
        },
        NavigationActions: {
            navigate: jest.fn().mockImplementation(x => x),
        }
    }
});
jest.useFakeTimers()
it('renders correctly', () => {
  renderer.create(<App />);
});
