import React from 'react';
import { View, Text } from 'react-native';
import { MainHeading } from '../../styles/Texts';

const Home = () => {
    console.log('home component')
    return(
    <View>
        <MainHeading >
            Home Page
        </MainHeading>
    </View>
    )
}

export default Home;