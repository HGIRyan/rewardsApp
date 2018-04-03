import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './Button';

export default class Account extends Component {

    state = {
        name: '',
        phone: '',
        email: '',
        DOB: ''
    }

    goToAccountSettings = () => {
        this.props.navigation.navigate('AccountSettings')
    }


    render() {
        return(
            <View>
                <Text style={styles.headerText} >
                    Account Component
                </Text>
           
            <Button onPress={ () => this.goToAccountSettings() }>
                Edit Account Info
            </Button>
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