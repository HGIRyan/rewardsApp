import React, { Component } from 'react';
import Button from './Button';
import { MainHeading, SubHeading } from '../../styles/Texts';
import { ButtonContainer } from '../../styles/Buttons';
import { MainContainer } from '../../styles/Views';

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
            <MainContainer> 
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
    viewContainer: {
        height: '100%',
        width: '100%',
    },
    buttonContainer: {
        width: '100%',
        position: "absolute",
        bottom: 5
    }
}