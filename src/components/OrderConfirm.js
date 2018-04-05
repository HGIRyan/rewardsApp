import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './Button';
import { MainHeading } from '../../styles/Texts';
import { ButtonContainer } from '../../styles/Buttons';
import { MainContainer, DetailViewContainer } from '../../styles/Views';
import OrderDetails from './OrderDetails';


export default class OrderConfirm extends Component {

    state = {}

    render() {
        return(
            <MainContainer>
                <MainHeading >
                    Order Details
                 </MainHeading>
                 <DetailViewContainer >
                    <OrderDetails/>
                 </DetailViewContainer>
                 <ButtonContainer>
                    <Button>
                        Pay with Card
                    </Button>
                    <Button >
                        Redeem with Points
                    </Button>
                 </ButtonContainer>
            </MainContainer>
        )
    }
}

const styles = {
    OrderDetailView: {
        height: 360,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginLeft: 40,
        marginRight: 40,
        shadowColor: '#000',
        overflow: 'scroll',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: .2
    }
}