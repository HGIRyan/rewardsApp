import React from 'react';
import { ButtonPush, ButtonText } from '../../styles/Buttons';

const Button = ({ onPress, children }) => {
    return(
        <ButtonPush style={styles.button} onPress={onPress}  >
            <ButtonText>
                { children }
            </ButtonText>
        </ButtonPush>
    )
}

const styles = {
    button: {
        position: 'relative',
        bottom: 5
    }
}

export default Button;