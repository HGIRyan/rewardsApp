import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/reducer';
import { View, Text, ImageBackground } from 'react-native';
import { MainHeading } from '../../styles/Texts';
import { MainContainer, DetailViewContainer } from '../../styles/Views';
import Button from './Button';
import Login from './Login';
import Photos from './Photos';
import pico from '../assests/chips.jpg';

class Home extends Component {
    state={}
    componentWillMount() {
        this.props.getUserInfo()

    }
    render() {
        return(
        <MainContainer>
            <ImageBackground style={{width: '100%', height: '100%'}} source={pico}>
            <MainHeading style={{color: '#0d6017', fontWeight: '800'}}>
                Rewards App
            </MainHeading>
            </ImageBackground>
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