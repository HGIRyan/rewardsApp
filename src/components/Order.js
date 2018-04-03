import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './Button';
import { MainHeading } from '../../styles/Texts';

export default class Order extends Component {

    state = {}

    goToOrderConfirm = () => {
        this.props.navigation.navigate('OrderConfirm')
    }

    render() {
        return(
            <View style={styles.orderContainer} >
                <View style={styles.buttonViewStyle} >
                <MainHeading >
                      Order Component
                 </MainHeading>
                </View>
                    <Button onPress={ () => this.goToOrderConfirm() }>
                        Click to Confirm Order
                    </Button>
                
            </View>
        )
    }
}

const styles = {
    orderContainer: {
        height: '100%',
        width: '100%'
    },
    buttonViewStyle: {
        height: 110
    }
}