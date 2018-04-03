import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './Button';
import { MainHeading, SubHeading } from '../../styles/Texts';

export default class Account extends Component {

    state = {
        name: "Tim",
        phone: "801-987-9076",
        email: 'jo@gmail.com',
        DOB: '11-11-11'
    }

    goToAccountSettings = () => {
        this.props.navigation.navigate('AccountSettings')
    }


    render() {
        return(
            <View>
                <MainHeading >
                    Account Information
                </MainHeading>
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
           
            <Button onPress={ () => this.goToAccountSettings() }>
                Edit Account Info
            </Button>
            </View>
        )
    }
}