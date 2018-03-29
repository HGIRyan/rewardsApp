import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './Button';

export default class OrderConfirm extends Component {

    state = {}

    render() {
        return(
            <View>
                <Text>
                    OrderConfirm Screen
                </Text>
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