import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { MainHeading, SubHeading, BoldText } from '../../styles/Texts';




class OrderDetails extends Component {
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
        ],
        cartTotal: 0
    }

    componentDidMount() {
        let cart = this.props.cart;
        let total = 0;
        for (let i = 0; i <= cart.length - 1; i++) {
            total = total + cart[i].Price
        }
        this.setState({
            cartTotal: total
        })
    }
    removeFromCart(index) {
        let cart = this.props.cart;
        console.log(cart[index])
        Alert.alert(
            'Are You Sure?',
            `This will remove your ${cart[index].Entree} from your cart`,
            [
                {text: 'DELETE', onPress: () => console.log('OK Pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            { cancelable: false }
          )
    }
    render() {
        const cart = this.props.cart;
        console.log('CartTotal:', this.state.cartTotal)


        // const itemName = this.state.items.map((items, i) => {
        //     return <Text style={ styles.orderDetailText } key={i}>{ `Item: ${items.name}    Price: $${items.price}` }</Text>
        // })

        // const itemPrice = this.state.items.map((items, i) => {
        //     return <Text style={ styles.orderDetailText }key={i}>{ `n$${items.price}` }</Text>
        // })


        return (
            <View  >
                {cart.map((item, i) => {
                    return (
                        <SubHeading key={i}>
                            <BoldText>Entree: </BoldText> {item.Entree}
                            <BoldText>Price: </BoldText> {item.Price} <Button onPress={_=>this.removeFromCart(i)} title="Delete" />
                        </SubHeading>
                    )
                }
                )}
                <BoldText>
                    Cart Total: {this.state.cartTotal}
                </BoldText>
            </View>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(OrderDetails);

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