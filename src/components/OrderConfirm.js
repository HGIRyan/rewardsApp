import React, { Component } from 'react';
import Button from './Button';
import { MainHeading } from '../../styles/Texts';
import { ButtonContainer } from '../../styles/Buttons';
import { MainContainer } from '../../styles/Views';


export default class OrderConfirm extends Component {

    state = {}

    render() {
        return(
            <MainContainer>
                <MainHeading >
                    Order Confirmation Screen
                 </MainHeading>
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

