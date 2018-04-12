import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/reducer';
import { View, Text, Button } from 'react-native';
import { MainHeading } from '../../styles/Texts';
import { MainContainer } from '../../styles/Views';
import Login from './Login';

class Home extends Component {
    state={}
    componentWillMount() {
        this.props.getUserInfo()
    }
    render(){
        return(
        <MainContainer>
            <MainHeading >
                Home Page
            </MainHeading>
            <Login/>
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