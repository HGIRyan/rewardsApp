import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { newOrder, getUserInfo } from '../../ducks/reducer';

import Button from './Button';
import { MainHeading } from '../../styles/Texts';
import { ButtonContainer } from '../../styles/Buttons';
import { MainContainer, DetailViewContainer } from '../../styles/Views';
import OrderDetails from './OrderDetails';


class OrderConfirm extends Component {

    state = {
        enoughPoints: false,
        cartTotal:0
    }

    componentWillMount() {
        let cart =  this.props.cart;
        let total = 0;

        if( this.props.user.pointbalance / 10 >= this.state.cartTotal ){
            this.setState({
                enoughPoints:true
            })
        }
        for(let i = 0 ; i <= cart.length -1 ; i++ ){
            total = total+cart[i].Price
        }
       this.setState({
           cartTotal:total
       })

    }
    goHome = () => {
        this.props.navigation.pop()
        this.props.navigation.navigate('Home')
    }

    confirmOrder(paymentMethod,date) {
        let body = {
            "userid": 1,
            "total": (paymentMethod === 'Rewards'?    parseInt(this.state.cartTotal * 10):this.state.cartTotal),
            "orderdate": date,
            "paymentType": paymentMethod
        }
        console.log(body)
        this.props.newOrder(body)
            .then(_ => {
                return this.goHome()
            })
    }
    
    render() {
        const cart = this.props.cart;

        let date = Date().slice(0,24)
        return (
            <MainContainer>
                <MainHeading >
                    Order Details
                 </MainHeading>
                <DetailViewContainer >
                    <OrderDetails />
                    {/* <Text>pointbalance:{this.props.user.pointbalance}
                    can use points?: {this.props.user.pointbalance / 10 >= this.state.cartTotal? 'true':'false'}
                    rewards cart total: {parseInt(this.state.cartTotal * 10)}
                    
                    </Text> */}
                </DetailViewContainer>
                <ButtonContainer>
                    <Button onPress={ () => this.confirmOrder('Card',date) }>
                        Pay with Card
                    </Button>
                    
                    {this.state.enoughPoints === true  ? 
                    <Button disabled={true} onPress={ () => this.confirmOrder('Rewards', date) }>
                    Redeem with Points
                </Button>
                    :
                    null
                }
                </ButtonContainer>
            </MainContainer>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        user: state.user,
        cart: state.cart
    }
}

export default connect(mapStateToProps, { newOrder, getUserInfo })(OrderConfirm);

const styles = {
    OrderDetailView: {
        height: 360,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginLeft: 40,
        marginRight: 40,
        shadowColor: '#000',
        overflow: 'scroll',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .2
    }
}