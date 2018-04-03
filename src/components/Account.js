import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './Button';
import { MainHeading } from '../../styles/Texts';

export default class Account extends Component {

    goToAccountSettings = () => {
        this.props.navigation.navigate('AccountSettings')
    }


    render() {
        return(
            <View>
                <MainHeading >
                    Account Information
                </MainHeading>
           
            <Button onPress={ () => this.goToAccountSettings() }>
                Edit Account Info
            </Button>
            </View>
        )
    }
}