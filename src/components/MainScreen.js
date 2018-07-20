import React, { Component } from 'react';
import {Text, View, TouchableOpacity} from 'react-native'
class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      board: ['', '', '', '', '', ''],
      player: 'X'
     };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row1}>
          <TouchableOpacity style={styles.box}>
            <Text>{this.state.player}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
          <Text>{this.state.player}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
          <Text>{this.state.player}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row1}>
          <TouchableOpacity style={styles.box}>
          <Text>{this.state.player}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
          <Text>{this.state.player}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
          <Text>{this.state.player}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row1}>
          <TouchableOpacity style={styles.box}>
          <Text>{this.state.player}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
          <Text>{this.state.player}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
          <Text>{this.state.player}</Text>
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