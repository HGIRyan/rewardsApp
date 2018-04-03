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
            <View style={styles.orderContainer} >
                <View style={styles.buttonViewStyle} >
                    <Text style={styles.headerText} >
                        Order Component
                    </Text>
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
    headerText: {
        fontSize: 30,
        color: 'red',
        padding: 15,
        alignSelf: 'center'
    },
    buttonViewStyle: {
        height: 110
    }
}