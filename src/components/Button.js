import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    return(
        <TouchableOpacity  onPress={onPress} style={ styles.buttonStyle } >
            <Text style={ styles.textStyle } >
                { children }
            </Text>
        </TouchableOpacity>
    )
}

const styles =  {
    buttonStyle: {
        flex: 1,
        height: 10,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        padding: 10
    }
}

export default Button;