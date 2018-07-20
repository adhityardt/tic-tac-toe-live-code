import React, { Component } from 'react';
import {Button} from 'react-native'
class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Button title="Start" onPress={() =>this.props.navigation.navigate('Second')} />
    );
  }
}

const styles = {
  button: {

  }
}

export default WelcomeScreen;