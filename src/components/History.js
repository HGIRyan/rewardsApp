import React from 'react';
import { View, Text } from 'react-native';
// import styled from 'styled-components';

const History = () => {

    // from styled-components github example but not working
//     const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

// const Wrapper = styled.section`
// padding: 4em;
// background: papayawhip;
// `;
// console.log(Wrapper)
console.log('history component')

    return(

        // <Wrapper>
        //     {console.log('history component')}

        //     <Title >
        //         History Page
        //     </Title>
        // </Wrapper>
        <View>
            {console.log('history component 2')}
            <Text style={styles.headerText} >
                History Page
            </Text>
        </View>

    )
}

const styles = {
    headerText: {
        fontSize: 30,
        color: 'red',
        padding: 15,
        alignSelf: 'center'
    }
}

export default History;