import React from 'react';
import { View, Text } from 'react-native';
import { MainHeading } from '../../styles/Texts';
import { MainContainer, DetailViewContainer } from '../../styles/Views';


const History = () => {
    return(

        <MainContainer>
            <MainHeading style={ styles.topMargin } >
                Order History
            </MainHeading>
            <DetailViewContainer>

            </DetailViewContainer>
        </MainContainer>

    )
}

const styles = {
    topMargin: {
        marginTop: 60
    }
}

export default History;