import { createStackNavigator } from 'react-navigation';
import React from 'react';
import WelcomeScreen from '../components/WelcomeScreen';
import MainScreen from '../components/MainScreen';
import EndScreen from '../components/EndScreen';

const RootStack = createStackNavigator({
  First: WelcomeScreen,
  Second: MainScreen,
  Third: EndScreen
}, {
  initialRouteName: 'First'
})

export default RootStack