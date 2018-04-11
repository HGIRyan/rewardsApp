import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
//   Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Auth0 from 'react-native-auth0';
import Home from './Home';
import Order from './Order';
import Button from './Button';
import { ButtonContainer } from '../../styles/Buttons';
import { BoldText, SubHeading } from '../../styles/Texts';

var credentials = require('../../secrets');
const auth0 = new Auth0(credentials);

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { accessToken: null };
  }

  redirect = () => {
      console.log('redirect is running')
    this.props.navigation.navigate('Order')
  }

  _onLogin = () => {
    console.log('working in login')

    auth0.webAuth
      .authorize({
        scope: 'openid profile',
        audience: 'https://rewards-app-project.auth0.com/userinfo',
        useBrowser: true
      })
      .then(_ => {
        this.setState({ accessToken: credentials.accessToken })
        this.redirect();

      })
      .catch(error => console.log(error));
  };

  _onLogout = () => {
    if (Platform.OS === 'android') {
      this.setState({ accessToken: null });
    } else {
      auth0.webAuth
        .clearSession({})
        .then(success => {
          this.setState({ accessToken: null });
        })
        .catch(error => console.log(error));
    }
  };

  render() {
    let loggedIn = this.state.accessToken === null ? false : true;
    return (
        
      <View style={styles.container}>
      <ButtonContainer>
        {/* <Text style={styles.header}>Login</Text> */}
        <SubHeading style={styles.header} >
          You are <BoldText>{loggedIn ? '' : 'NOT '}logged in.</BoldText>
        </SubHeading>
        
            <Button
            onPress={loggedIn ? this._onLogout : this._onLogin}
            title={loggedIn ? 'Log Out' : 'Log In'}
            >
            {loggedIn ? 'Log Out' : 'Log In'}
            </Button>
        </ButtonContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

AppRegistry.registerComponent('Login', () => Login);