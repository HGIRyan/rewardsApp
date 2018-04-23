import styled from 'styled-components';

export const ButtonPush = styled.TouchableOpacity`
  height: 50;
  align-self: stretch;
  background-color: #fff;
  border-radius: 5;
  border-width: 1;
  border-color: #007aff;
  margin-left: 5;
  margin-right: 5;
  margin-top: 10;
  box-shadow: 2px 2px;
  shadow-color: #000;
  shadowOpacity: .5;
  shadowRadius: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// flex: 1,   this forces it to fill the whole screen/view height

export const ButtonText = styled.Text`
alignSelf: center;
color: #007aff;
fontSize: 18px;
font-weight: 600;
padding: 10px;
}
`;

export const HalfButtonText = styled.Text`
alignSelf: center;
color: #fff;
fontSize: 18px;
font-weight: 700;
padding: 10px;
}
`;

export const HalfButtonPush = styled.TouchableOpacity`
  height: 40;
  background-color: ${props => props.cancel ? 'red' : '#23DD10'};
  border-radius: 30;
  width: 40%;
  border-width: 0;
  border-color: #fff;
  margin-left: 5;
  margin-right: 5;
  margin-top: 10;
  box-shadow: 2px 2px;
  shadow-color: #000;
  shadowOpacity: .5;
  shadowRadius: 2;
`;

export const TwoButtonContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const ButtonContainer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 5
`