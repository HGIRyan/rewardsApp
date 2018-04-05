import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View } from 'react-native';

import { getUserInfo } from '../../ducks/reducer';
import Button from './Button';
import { MainHeading, SubHeading } from '../../styles/Texts';
import { ButtonContainer } from '../../styles/Buttons';
import { MainContainer } from '../../styles/Views';
import profilePic from '../assests/profile.png';

class Account extends Component {

    // state = {
    //     name: "Ray",
    //     phone: "801-987-9076",
    //     email: 'jo@gmail.com',
    //     DOB: '11-11-11'
    // }
    componentWillMount() {
        this.props.getUserInfo()
    }

    goToAccountSettings = () => {
        this.props.navigation.navigate('AccountSettings')
    }


    render() {
        const user = this.props.user;
        var options = { month: 'long', day: 'numeric' , year: 'numeric'  };


        return(
            <MainContainer> 
                <MainHeading >
                    Account Information
                </MainHeading>
                <View style={ styles.profilePic } >
                    <Image source={profilePic}  />
                </View>
                <SubHeading >
                Name: { !user.firstname ? null:user.firstname +' ' + user.lastname}

                </SubHeading>
                <SubHeading >
                Name: { !user.firstname ? null:user.phone}

                </SubHeading>
                <SubHeading >
                Email: { !user.firstname ? null:user.email}

                </SubHeading>
                <SubHeading >
                Date of Birth: : { !user.firstname ? null:
                new Date( user.birthday.slice(0,10).split('-').join(',')).toLocaleDateString('en-us', options)
                 }
                

                </SubHeading>
                <ButtonContainer>
                    <Button onPress={ () => this.goToAccountSettings() }>
                        Edit Account Info
                    </Button>
                </ButtonContainer>
            </MainContainer>
        )
    }
}

function mapStateToProps(state) {
    return {
      user: state.user
    }
  }
  
  export default connect(mapStateToProps, { getUserInfo })(Account);

const styles = {
   profilePic: {
       alignSelf: 'center',
       width: 200,
       height: 200
   }
}