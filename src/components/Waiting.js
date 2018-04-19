import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import {  MainHeading } from '../../styles/Texts';

import { connect } from 'react-redux';

import { sendUserInfo } from '../../ducks/reducer';


class Waiting extends Component {

  componentDidUpdate(){
    this.redirect()
  }
  redirect = () => {
    console.log('redirect is running')
    if( this.props.getUserInfoStatus === 'SEND_USER_INFO_FULFILLED'){
      this.props.navigation.navigate('Home')
    }
  }
  render() {
    return (      
      <View style={[styles.container, styles.horizontal]}>
      <View style={styles.centered}>
      <ActivityIndicator size='large' color="#0000ff"/>
      <MainHeading style={{ fontWeight: 'bold' }}>Logging You In!</MainHeading>
      </View>
    </View>

    );
  }
}

function mapStateToProps(state) {
  return {
    getUserInfoStatus: state.getUserInfoStatus
  }
}

export default connect( mapStateToProps )(Waiting);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center'
  },
  horizontal: {
    // flexDirection: 'column-reverse',
    // height:250,
    justifyContent: 'space-around',
    padding: 10
  },
  centered:{
    height: 100,
    justifyContent: 'space-around'
  }
})

AppRegistry.registerComponent('Waiting', () => Waiting);