import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class OrderDetails extends Component {
    state = {
        items: [
            {
                name: 'tacos',
                price: 8
            },
            {
                name: 'salad',
                price: 9
            },
            {
                name: 'chips',
                price: 6
            }
        ]
    }


    render() {
        const itemName = this.state.items.map((items, i) => {
            return <Text key={i}>{ items.name }</Text>
        })

        const itemPrice = this.state.items.map((items, i) => {
            return <Text key={i}>{ items.price }</Text>
        })


        return(
            <View>
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