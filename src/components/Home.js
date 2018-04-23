import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/reducer';
import { View, Text, ImageBackground, Button, TouchableOpacity, Image } from 'react-native';
import { MainHeading } from '../../styles/Texts';
import { MainContainer, DetailViewContainer } from '../../styles/Views';
import Login from './Login';
import Photos from './Photos';
import wood from '../assests/wood.jpg';
import chicken from '../assests/chicken.jpg';

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
        <MainContainer >
            <ImageBackground style={{width: '100%', height: '100%'}} source={wood}>
                <View style={{ position: 'relative' }}>
                    <MainHeading style={{ }}>
                        Abuelita's Comidas
                    </MainHeading>
                    <TouchableOpacity style={styles.logoutButton}>
                        <Button title='Logout' color='#007aff' onPress={() => this.goToLogin()} style={{fontSize: 12}} />
                    </TouchableOpacity>
                </View>
                <Image source={chicken} style={{ height: 300, width: 'auto' }}/>
                <View style={styles.pointsView}>
                    <Text style={styles.points} >
                        Reward Points 
                    </Text>
                    <Text style={styles.points} >
                        {this.props.user.pointbalance}
                    </Text>
                </View>
            </ImageBackground>
        </MainContainer>
        )
    }
}

const styles = {
    title: {
        fontWeight: '800',
        marginTop: 50, 
        fontSize: 30,
        ...Platform.select({
             ios: { fontFamily: 'Arial', }, 
             android: { fontFamily: 'Roboto' }
        })
      },
    logoutButton: {
       position: 'absolute',
       top: 13,
       right: 0,
    },
    pointsView: {
        backgroundColor: '#efeff4',
        width: 180,
        height: 180,
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
        opacity: .7,
        position: 'absolute',
        bottom: 30
    },
    points: {
        color: '#007aff',
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: '700'
    }
}

function mapStateToProps(state) {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps, { getUserInfo })(Home);