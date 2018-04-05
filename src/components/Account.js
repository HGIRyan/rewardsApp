import React, { Component } from 'react';
import { Image, View } from 'react-native';
import Button from './Button';
import { MainHeading, SubHeading, BoldText } from '../../styles/Texts';
import { ButtonContainer, TwoButtonContainer } from '../../styles/Buttons';
import { MainContainer, AccountDetailsView, DetailViewContainer } from '../../styles/Views';
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
                <DetailViewContainer>
                    <AccountDetailsView>
                        <BoldText>
                            Name:
                        </BoldText>
                        <SubHeading >
                            {this.state.name}
                        </SubHeading>
                    </AccountDetailsView>

                    <AccountDetailsView>
                        <BoldText>
                            Phone Number:
                        </BoldText>
                        <SubHeading >
                            {this.state.phone}
                        </SubHeading>
                    </AccountDetailsView>

                    <AccountDetailsView>
                        <BoldText>
                            Email:
                        </BoldText>
                        <SubHeading >
                            {this.state.email}
                        </SubHeading>
                    </AccountDetailsView>

                    <AccountDetailsView>
                        <BoldText>
                            Date of Birth:
                        </BoldText>
                        <SubHeading >
                            {this.state.DOB}
                        </SubHeading>
                    </AccountDetailsView>
                </DetailViewContainer>
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
       height: 200,
   }
}