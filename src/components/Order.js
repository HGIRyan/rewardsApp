import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from './Button';
import { MainHeading, BoldText, SubHeading } from '../../styles/Texts';
import { ButtonContainer } from '../../styles/Buttons';
import { MainContainer, AccountDetailsView, DetailViewContainer } from '../../styles/Views';
import { RadioButtons } from 'react-native-radio-buttons'


export default class Order extends Component {

    state = {}

    goToOrderConfirm = () => {
        this.props.navigation.navigate('OrderConfirm')
    }

    render() {
        const options = [
            "Tacos",
            "Salad",
            "Chips"
          ];

        const style = {
            fontSize: 20
        }

          function setSelectedOption(selectedOption){
            this.setState({
              selectedOption
            });
          }
        
          function renderOption(option, selected, onSelect, index){
            const style = selected ? { fontWeight: 'bold', color: '#084598', fontSize: 20} : { color: '#007aff', fontSize: 19 };
        
            return (
              <TouchableOpacity onPress={onSelect} key={index}>
                <Text style={style}>{option}</Text>
              </TouchableOpacity>
            );
          }
        
          function renderContainer(optionNodes){
            return <View style={{marginLeft: 10}} >{optionNodes}</View>;
          }
          console.log(this.state)
        return(
            <MainContainer>
                <View  >
                <MainHeading >
                      Select an Entree
                 </MainHeading>
                </View>
                <DetailViewContainer style={{marginTop: -10}} >
                    <View style={styles.flexView} >
                        <RadioButtons
                            options={ options }
                            optionStyle={{color: 'red'}}
                            onSelection={ setSelectedOption.bind(this) }
                            selectedOption={this.state.selectedOption }
                            renderOption={ renderOption }
                            renderContainer={ renderContainer }
                            />
                            <AccountDetailsView>
                                <BoldText>
                                    Selected Entree:
                                </BoldText>
                                <SubHeading>
                                    {this.state.selectedOption || 'none'}
                                </SubHeading>
                            </AccountDetailsView>
                        </View>
                    </DetailViewContainer>
                    <MainHeading >
                      Choose your Toppings
                    </MainHeading>
                <ButtonContainer>
                    <Button onPress={ () => this.goToOrderConfirm() }>
                        Click to Confirm Order
                    </Button>
                </ButtonContainer>
            </MainContainer>
        )
    }
}

const styles = {
    flexView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
}