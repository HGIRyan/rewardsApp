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


export default Button;