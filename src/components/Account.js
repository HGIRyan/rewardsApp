import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './Button';
import { MainHeading, SubHeading } from '../../styles/Texts';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/reducer';

class Account extends Component {

    state = {
        name: "Tim",
        phone: "801-987-9076",
        email: 'jo@gmail.com',
        DOB: '11-11-11'
    }

    goToAccountSettings = () => {
        this.props.navigation.navigate('AccountSettings')
    }
    componentWillMount() {
        this.props.getUserInfo()
    }

    render() {
        console.log(this.state.user)
        const user = this.props.user
        var options = { month: 'long', day: 'numeric' , year: 'numeric'  };

        return(
            <View>
                <MainHeading >
                    Account Information
                </MainHeading>
                <SubHeading >
                Name: { !user.firstname ? null:user.firstname +' ' + user.lastname}
                </SubHeading>
                <SubHeading >
                Phone Number:  { !user.firstname ? null:user.phone}
                </SubHeading>
                <SubHeading >
                Email:   { !user.firstname ? null:user.email }
                </SubHeading>
                <SubHeading >
                Date of Birth: { !user.firstname ? null:new Date('1990-05-11'.slice(0,10)).toLocaleDateString('en-us', options)}
                
               

                </SubHeading>
           
            <Button onPress={ () => this.goToAccountSettings() }>
                Edit Account Info
            </Button>
            </View>
        )
    }
}
function mapStateToProps(state) {
    return {
      user: state.user
    }
  }
  
  export default connect(mapStateToProps, { getUserInfo })(Account);