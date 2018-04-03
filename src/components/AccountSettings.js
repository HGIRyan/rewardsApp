import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class Account extends Component {

    state = {
        name: 'name',
        phone: 'phone number',
        email: 'email address',
        DOB: 'date of birth'
    }

    render() {
        console.log(this.state.name)

        return(
            <View>
                <Text style={styles.headerText} >
                    Account Settings Component
                </Text>
                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(name) => this.setState({name})}
                    placeholder={this.state.name}>
                    
                </TextInput>
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