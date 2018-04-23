import React, { Component } from 'react';
import { View, Text, Button, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { MainHeading, SubHeading, BoldText } from '../../styles/Texts';
import { HalfButtonPush, HalfButtonText } from '../../styles/Buttons';
import {removeFromCart, calculateCart} from '../../ducks/reducer';




class OrderDetails extends Component {
    state = {
        cartTotal: 0
    }

    componentDidMount = () => {
      this.props.calculateCart(this.props.cart)
    }
    
    componentWillReceiveProps() {
        this.props.calculateCart(this.props.cart)
    }
      
  

    // calculateCart() {
    //     console.log('calculating cart')
    //     let cart = this.props.cart;
    //     let total = 0;
    //     for (let i = 0; i <= cart.length - 1; i++) {
    //         total = total + cart[i].Price
    //     }
    //     this.setState({
    //         cartTotal: total
    //     })
    // }
    deleteFromCart(index) {
        let cart = this.props.cart;
        console.log(cart[index])
        Alert.alert(
            'Are You Sure?',
            `This will remove your ${cart[index].Entree} from your cart`,
            [
                {text: 'DELETE', onPress: () => this.props.removeFromCart(index)},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            { cancelable: false }
          )
        //   .then(_=> {this.calculateCart()}
        // )
    }

    render() {
        const cart = this.props.cart;
        console.log('CartTotal:', this.props.cartTotal)

        return (
            <ScrollView  >
                {cart.map((item, i) => {
                    return (
                        <View key={i} style={styles.orderContainer} >
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <BoldText>Entree: </BoldText> 
                                <SubHeading style={styles.orderDetailText}>{item.Entree}</SubHeading>
                            </View>
                            <HalfButtonPush cancel onPress={_=>this.deleteFromCart(i)} 
                               style={{ width: 30, height: 30, marginRight: 10 }}>
                                <HalfButtonText style={{ fontSize: 12, marginTop: -2 }} >
                                    X
                                </HalfButtonText>
                            </HalfButtonPush>
                            
                            
                        </View>
                    )
                }
                )}
                <BoldText style={{alignSelf: 'center'}} >
                    Cart Total: ${this.props.cartTotal}
                </BoldText>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        cart: state.cart,
        cartTotal: state.cartTotal
    }
}

export default connect(mapStateToProps, {removeFromCart, calculateCart})(OrderDetails);

const styles = {
    orderContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderDetailText: {
        // alignSelf: 'center',
        // color: '#084598',
        marginLeft: 0,
    },
    deleteButton: {
        backgroundColor: 'green',
        textAlign: 'center',
        marginTop: 15,
        padding: 30,
        height: 30,
        width: 50
    }
}