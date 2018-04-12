import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class OrderDetails extends Component {
    state = {
        items: [
            {
                name: 'Tacos',
                price: 8
            },
            {
                name: 'Salad',
                price: 9
            },
            {
                name: 'Chips',
                price: 6
            }
        ]
    }


    render() {
        const itemName = this.state.items.map((items, i) => {
            return <Text style={ styles.orderDetailText } key={i}>{ `Item: ${items.name}` }</Text>
        })

        const itemPrice = this.state.items.map((items, i) => {
            return <Text style={ styles.orderDetailText }key={i}>{ `$${items.price}` }</Text>
        })


        return(
            <View style={ styles.orderContainer } >
            <View>
                <Text>Item</Text>
                {itemName}
            </View>
            <View>
                <Text>Price</Text>
                {itemPrice}
            </View>
            </View>
        )
    }
}

const styles = {
    orderContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    orderDetailText: {
        alignSelf: 'center',
        color: '#084598',
        marginLeft: 5
    }
}