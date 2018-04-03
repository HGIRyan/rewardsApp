import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { AccountInput } from '../../styles/Inputs';
import { MainHeading } from '../../styles/Texts';

export default class Account extends Component {

    state = {
        name: 'name',
        phone: 'phone number',
        email: 'email address',
        DOB: 'MM/DD/YYYY'
    }

    render() {
        console.log(this.state.name)
        console.log(this.state.phone)
        console.log(this.state.email)

// resource for react native inputs: https://facebook.github.io/react-native/docs/textinput.html#onsubmitediting

        return(
            <View>
                <MainHeading >
                     Update Account Information
                 </MainHeading>
                <AccountInput 
                    onChangeText={(name) => this.setState({name})}
                    placeholder={this.state.name}>
                </AccountInput>
                <AccountInput 
                    onChangeText={(phone) => this.setState({phone})}
                    placeholder={this.state.phone}>
                </AccountInput>
                <AccountInput 
                    onChangeText={(email) => this.setState({email})}
                    placeholder={this.state.email}>
                </AccountInput>
                <AccountInput 
                    onChangeText={(DOB) => this.setState({DOB})}
                    placeholder={this.state.DOB}>
                </AccountInput>
            </View>
        )
    }
}
