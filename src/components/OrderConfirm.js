import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './Button';
import { MainHeading } from '../../styles/Texts';

export default class OrderConfirm extends Component {

    state = {}

    render() {
        return(
            <View>
                <MainHeading >
                    Order Confirmation Screen
                 </MainHeading>
                <Button>
                    Pay with Card
                </Button>
                <Button >
                    Redeem with Points
                </Button>

            </View>
        )
    }
}