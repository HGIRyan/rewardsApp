import React from 'react';
import { View, Text } from 'react-native';

const Home = () => {
    return(
    <View>
        <Text style={styles.headerText} >
            Home Page
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

export default Home;