import React, { Component } from 'react';
import {Text, View, TouchableOpacity} from 'react-native'
import {observer} from 'mobx-react'
import MobXStore from '../stores/MobXStore';

@observer class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      board: ['', '', '', '', '', '', '', '', '']
     };
  }
  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.row1}>
          <TouchableOpacity style={styles.box} onPress={()=> MobXStore.state.board[0] = 'yes'}>
            <Text>{MobXStore.state.board[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={()=> MobXStore.state.board[1] = 'yes'}>
          <Text>{MobXStore.state.board[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={()=> MobXStore.state.board[2] = 'yes'}>
          <Text>{MobXStore.state.board[2]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row1}>
          <TouchableOpacity style={styles.box} onPress={()=> MobXStore.state.board[3] = 'yes'}>
          <Text>{MobXStore.state.board[3]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={()=> MobXStore.state.board[4] = 'yes'}>
          <Text>{MobXStore.state.board[4]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={()=> MobXStore.state.board[5] = 'yes'}>
          <Text>{MobXStore.state.board[5]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row1}>
          <TouchableOpacity style={styles.box} onPress={()=> MobXStore.state.board[6] = 'yes'}>
          <Text>{MobXStore.state.board[6]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={()=> MobXStore.state.board[7] = 'yes'}>
          <Text>{MobXStore.state.board[7]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={()=> MobXStore.state.board[8] = 'yes'}>
          <Text>{MobXStore.state.board[8]}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  container : {
    flex: 1,
    flexDirection: 'column',
  },
  row1 : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    borderWidth: 1,
    height: 80,
    width: 80
  }
}
export default MainScreen;