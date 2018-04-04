import React from 'react';
import { HalfButtonPush, HalfButtonText } from '../../styles/Buttons';

const HalfButton = ({ onPress, children }) => {
    return(
        <HalfButtonPush onPress={onPress}  >
            <HalfButtonText>
                { children }
            </HalfButtonText>
        </HalfButtonPush>
    )
}


export default HalfButton;