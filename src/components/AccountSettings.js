import React, { Component } from 'react';
import { AccountInput } from '../../styles/Inputs';
import { MainHeading } from '../../styles/Texts';
import { TwoButtonContainer } from '../../styles/Buttons';
import HalfButton from './HalfButton';
import { HalfButtonPush, HalfButtonText } from '../../styles/Buttons';
import { MainContainer } from '../../styles/Views';



export default class Account extends Component {

    state = {
        name: 'name',
        phone: 'phone number',
        email: 'email address',
        DOB: 'MM/DD/YYYY'
    }

    goToAccount = () => {
        this.props.navigation.navigate('Account')
    }

    render() {
        console.log(this.state.name)
        console.log(this.state.phone)
        console.log(this.state.email)

// resource for react native inputs: https://facebook.github.io/react-native/docs/textinput.html#onsubmitediting

        return(
            <MainContainer>
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
                <TwoButtonContainer>
                    <HalfButton>
                        Save
                    </HalfButton>
                    <HalfButtonPush cancel 
                        onPress={ () => this.goToAccount() }>
                        <HalfButtonText>
                            Cancel
                        </HalfButtonText>
                    </HalfButtonPush>
                </TwoButtonContainer>
            </MainContainer>
        )
    }
}
