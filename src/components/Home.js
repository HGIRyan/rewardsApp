import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/reducer';
import { View, Text, Button, Image } from 'react-native';
import { MainHeading } from '../../styles/Texts';
import { MainContainer } from '../../styles/Views';
import Login from './Login';
import taco from '../assests/taco.jpg';

class Home extends Component {
    state={}
    componentWillMount() {
        this.props.getUserInfo()
    }
    render(){
        return(
        <MainContainer>
            <MainHeading >
                Rewards App
            </MainHeading>
            <Image source={taco} />
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