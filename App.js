import React, { Component } from 'react';
import { Text, View, StyleSheet, StackNavigator } from 'react-native';
import { Tabs } from './router';

import { Provider } from 'react-redux';
import store from './store';

// import Navbar from './src/components/Navbar';
// import Login from './src/components/Login';
// import Home from './src/components/Home';
// import Order from './src/components/Order';
// import Account from './src/components/Account';
// import History from './src/components/History';


export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Tabs style={style.tabs} />
      </Provider>
    )
  }
}
// return 
// <Provider store={createStore(reducers)}>
// <View>
//   <Text>
//     Rewards App

{/* </Text> */ }
// <Tabs/>


{/* <Navbar/> */ }

{/* </View> */ }
// </Provider>



const style = {
  tabs: {
    color: 'red',
    fontSize: 20,
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
