import React, { Component } from 'react';
import {Text, View, TouchableOpacity} from 'react-native'
class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row1}>
          <TouchableOpacity style={styles.box1}/>
        </View>
      </View>
    );
  }
}

const styles = {
  container : {

  },
  row1 : {
    
  },
  box1: {
    borderWidth: 1,
    height: 50,
    width: 50
  }
}
export default MainScreen;