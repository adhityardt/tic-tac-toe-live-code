import React, { Component } from 'react';
import {Text, View, TouchableOpacity} from 'react-native'
import {observer} from 'mobx-react'
import MobXStore from '../stores/MobXStore';

@observer class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     };
  }
  render() {
    if(MobXStore.state.counter === 7){
      this.props.navigation.navigate('Third')
    }
    return (
      <View style={styles.container}>
        <View style={styles.row1}>
          <TouchableOpacity style={styles.box} onPress={()=> MobXStore.setBoard(0)}>
            <Text style={styles.text}>{MobXStore.state.board[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={()=> MobXStore.setBoard(1)}>
          <Text style={styles.text}>{MobXStore.state.board[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={()=> MobXStore.setBoard(2)}>
          <Text style={styles.text}>{MobXStore.state.board[2]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row1}>
          <TouchableOpacity style={styles.box} onPress={()=> MobXStore.setBoard(3)}>
          <Text style={styles.text}>{MobXStore.state.board[3]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={()=> MobXStore.setBoard(4)}>
          <Text style={styles.text}>{MobXStore.state.board[4]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={()=> MobXStore.setBoard(5)}>
          <Text style={styles.text}>{MobXStore.state.board[5]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row1}>
          <TouchableOpacity style={styles.box} onPress={()=> MobXStore.setBoard(6)}>
          <Text style={styles.text}>{MobXStore.state.board[6]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={()=> MobXStore.setBoard(7)}>
          <Text style={styles.text}>{MobXStore.state.board[7]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={()=> MobXStore.setBoard(8)}>
          <Text style={styles.text}>{MobXStore.state.board[8]}</Text>
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
    width: 80,
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 60,
    marginLeft: 20
  }
}
export default MainScreen;