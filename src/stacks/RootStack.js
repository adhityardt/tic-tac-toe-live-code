import { createStackNavigator } from 'react-navigation';
import React from 'react';
import WelcomeScreen from '../components/WelcomeScreen';

const RootStack = createStackNavigator({
  First: WelcomeScreen,
}, {
  initialRouteName: 'First'
})

export default RootStack