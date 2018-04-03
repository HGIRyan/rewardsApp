import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonPush, ButtonText } from '../../styles/Buttons';

const Button = ({ onPress, children }) => {
    return(
        <ButtonPush  onPress={onPress}  >
            <ButtonText>
                { children }
            </ButtonText>
        </ButtonPush>
    )
}

const styles =  {
    buttonStyle: {
        // flex: 1,   this forces it to fill the whole screen/view height
        height: 40,
        // alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
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