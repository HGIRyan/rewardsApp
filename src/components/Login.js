import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  //   Button,
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native';
import Auth0 from 'react-native-auth0';
import Home from './Home';
import Order from './Order';
import Button from './Button';
import { ButtonContainer } from '../../styles/Buttons';
import { BoldText, SubHeading } from '../../styles/Texts';
import { MainContainer } from '../../styles/Views';
import taco from '../assests/taco.jpg';
import salsa from '../assests/salsa.jpg';
import { connect } from 'react-redux';

import { sendUserInfo } from '../../ducks/reducer';


var credentials = require('../../secrets');
const auth0 = new Auth0(credentials);
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: null,
      userInfo: {},
      fullProfile: {}
    };
  }

  // componentWillUpdate(){
  //    this.redirect()
  // }
  redirect = (path) => {
    console.log('redirect is running')
    // console.log(this.props.navigation)
    this.props.navigation.navigate(path)
  }

  _onLogin = () => {
    let info = this.state.userInfo


    auth0.webAuth
      .authorize({
        scope: 'openid profile email',
        audience: 'https://rewards-app-project.auth0.com/userinfo',
        useBrowser: true
      })
      .then(data => {
        auth0
          .auth
          .userInfo({ token: data.accessToken })
          .then(this.setState({ accessToken: data.accessToken }))
          .then(userInfo => {
            this.setState({
              userInfo: userInfo
            })
          })
          .then(send => {
            let info = this.state.userInfo
            let body = {
              givenName: info.givenName,
              familyName: info.familyName,
              email: info.email,
              picture: info.picture,
              sub: info.sub.split('|')[1]
            }
            this.props.sendUserInfo(body)
          })
          .catch(console.error)
      })
      .catch(error => {
        console.log(error)
        this.redirect('Login')
      }
      );
      this.redirect('Waiting')
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
  console.log('getUserInfoStatus:', this.props.getUserInfoStatus)

  return (
    <View style={styles.container}>
      <ImageBackground style={{ width: '100%', height: '100%' }} source={taco} >
        <ButtonContainer>
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
      </ImageBackground>
    </View>

  );
}
}

function mapStateToProps(state) {
  return {
    user: state.user,
    userInfo: state.userInfo,
    getUserInfoStatus: state.getUserInfoStatus
  }
}

export default connect(mapStateToProps, { sendUserInfo })(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom: 20
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

AppRegistry.registerComponent('Login', () => Login);