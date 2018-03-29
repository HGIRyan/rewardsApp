import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Navbar extends Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Button
          title="Go to home screen"
          onPress={() =>
            navigate('Home')
          }
        />
      );
    }
  }

export default Navbar;

