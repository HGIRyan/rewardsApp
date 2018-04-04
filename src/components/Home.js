import React from 'react';
import { MainHeading } from '../../styles/Texts';
import { MainContainer } from '../../styles/Views';


const Home = () => {
    console.log('home component')
    return(
    <MainContainer>
        <MainHeading >
            Home Page
        </MainHeading>
    </MainContainer>
    )
}

export default Home;