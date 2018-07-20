import React, { Component } from 'react';
import {Text, View} from 'react-native'
import {observer} from 'mobx-react'
import MobXStore from '../stores/MobXStore';

@observer class EndScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Text>{MobXStore.state.message}</Text>
    );
  }
}

export default EndScreen;