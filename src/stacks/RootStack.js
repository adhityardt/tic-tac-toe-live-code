import { createStackNavigator } from 'react-navigation';
import React from 'react';
import WelcomeScreen from '../components/WelcomeScreen';
import MainScreen from '../components/MainScreen';

const RootStack = createStackNavigator({
  First: WelcomeScreen,
  Second: MainScreen
}, {
  initialRouteName: 'First'
})

export default RootStack