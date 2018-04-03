import React from 'react';
import { View, Text } from 'react-native';

const History = () => {

    

    return(
        <View>
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
        padding: 15
    }
}

export default History;