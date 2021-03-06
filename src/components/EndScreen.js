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
      <Text style={styles.message}>{MobXStore.state.message}</Text>
    );
  }
}

const styles = {
  message: {
    fontSize: 100,
    alignItem: 'center'
  }
}

export default EndScreen;