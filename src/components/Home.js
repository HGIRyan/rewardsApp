import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/reducer';
import { View, Text, ImageBackground, Button, TouchableOpacity } from 'react-native';
import { MainHeading } from '../../styles/Texts';
import { MainContainer, DetailViewContainer } from '../../styles/Views';
// import Button from './Button';
import Login from './Login';
import Photos from './Photos';
import pico from '../assests/chips.jpg';

class Home extends Component {
    state={}
    componentWillMount() {
        // this.props.getUserInfo()
    }

    goToLogin = () => {
        console.log('logout button is firing')
        this.props.navigation.navigate('Login')
    }

    
    render() {
        return(
        <MainContainer>
            <ImageBackground style={{width: '100%', height: '100%'}} source={pico}>
                <View style={{ position: 'relative' }}>
                    <MainHeading style={{color: '#0d6017', fontWeight: '800', marginTop: -5}}>
                        Rewards App
                    </MainHeading>
                    <TouchableOpacity style={styles.logoutButton}>
                        <Button title='Logout' color='#0d6017' onPress={() => this.goToLogin()}/>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </MainContainer>
        )
    }
}

const styles = {
    logoutButton: {
       position: 'absolute',
       top: 13,
       right: 0,
    }
}

function mapStateToProps(state) {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps, { getUserInfo })(Home);