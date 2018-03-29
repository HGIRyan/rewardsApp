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
                <Button onPress={ }>
                    Pay with Card
                </Button>
                <Button onPress={ }>
                    Redeem with Points
                </Button>

            </View>
        )
    }
}