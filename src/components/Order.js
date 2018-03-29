import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './Button';

export default class Order extends Component {

    state = {}

    goToOrderConfirm = () => {
        this.props.navigation.navigate('OrderConfirm')
    }

    render() {
        return(
            <View>
                <Text>
                    Order Component
                </Text>
                <Button onPress={ () => this.goToOrderConfirm() }>
                    Click to Confirm Order
                </Button>
            </View>
        )
    }
}