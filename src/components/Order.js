import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './Button';
import { MainHeading } from '../../styles/Texts';
import { ButtonContainer } from '../../styles/Buttons';
import { MainContainer } from '../../styles/Views';


export default class Order extends Component {

    state = {}

    goToOrderConfirm = () => {
        this.props.navigation.navigate('OrderConfirm')
    }

    render() {
        return(
            <MainContainer>
                <View  >
                <MainHeading >
                      Order Component
                 </MainHeading>
                </View>
                <ButtonContainer>
                    <Button onPress={ () => this.goToOrderConfirm() }>
                        Click to Confirm Order
                    </Button>
                </ButtonContainer>
            </MainContainer>
        )
    }
}
