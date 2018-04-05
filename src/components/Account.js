import React, { Component } from 'react';
import { Image, View } from 'react-native';
import Button from './Button';
import { MainHeading, SubHeading } from '../../styles/Texts';
import { ButtonContainer } from '../../styles/Buttons';
import { MainContainer } from '../../styles/Views';
import profilePic from '../assests/profile.png';

export default class Account extends Component {

    state = {
        name: "Ray",
        phone: "801-987-9076",
        email: 'jo@gmail.com',
        DOB: '11-11-11'
    }

    goToAccountSettings = () => {
        this.props.navigation.navigate('AccountSettings')
    }


    render() {
        return(
            <MainContainer> 
                <MainHeading >
                    Account Information
                </MainHeading>
                <View style={ styles.profilePic } >
                    <Image source={profilePic}  />
                </View>
                <SubHeading >
                    { `Name: ${this.state.name}` }
                </SubHeading>
                <SubHeading >
                    { `Phone Number: ${this.state.phone}` }
                </SubHeading>
                <SubHeading >
                    { `Email: ${this.state.email}` }
                </SubHeading>
                <SubHeading >
                    { `Date of Birth: ${this.state.DOB}` }
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

const styles = {
   profilePic: {
       alignSelf: 'center',
       width: 200,
       height: 200
   }
}