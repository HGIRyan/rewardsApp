import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/reducer';
import { View, Text, Button, ImageBackground } from 'react-native';
import { MainHeading } from '../../styles/Texts';
import { MainContainer, DetailViewContainer } from '../../styles/Views';
import Login from './Login';
import taco from '../assests/taco.jpg';
import pico from '../assests/pico.jpg';

class Home extends Component {
    state={}
    componentWillMount() {
        // this.props.getUserInfo()
    }
    render(){
        return(
        <MainContainer>
            <ImageBackground style={{width: '100%', height: '100%'}} source={pico}>
            <DetailViewContainer style={{backgroundColor: 'rgba(239, 239, 244, 0.7)', marginTop: 200}} >
            <MainHeading >
                Rewards App
            </MainHeading>
            <MainHeading >
                Welcome to the Best Mexican Food App in South Provo
            </MainHeading>
            </DetailViewContainer>
            </ImageBackground>
            
            {/* <Login/> */}
        </MainContainer>
        )
    }
}

function mapStateToProps(state) {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps, { getUserInfo })(Home);