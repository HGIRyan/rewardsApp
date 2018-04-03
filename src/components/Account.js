import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Account extends Component {

    state = {}

    render() {
        return(
            <View>
                <Text style={styles.headerText} >
                    Account Component
                </Text>
            </View>
        )
    }
}

const styles = {
    headerText: {
        fontSize: 30,
        color: 'red',
        padding: 15,
        alignSelf: 'center'
    }
}