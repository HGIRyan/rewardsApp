import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from './Button';
import { MainHeading, BoldText, SubHeading } from '../../styles/Texts';
import { ButtonContainer } from '../../styles/Buttons';
import { MainContainer, AccountDetailsView, DetailViewContainer } from '../../styles/Views';
import { RadioButtons } from 'react-native-radio-buttons'

// source for radio buttons https://github.com/ArnaudRinquin/react-native-radio-buttons/blob/master/examples/App.js

export default class Order extends Component {

    state = {
        selectedOption: '',
        selectedSalsa: '',
        selectedLettuce: '',
    }

    goToOrderConfirm = () => {
        this.props.navigation.navigate('OrderConfirm')
    }

    render() {
        //       Selecting and entree
        const options = [ "Taco", "Salad", "Nachos", "Burrito" ];


          function setSelectedOption(selectedOption){
            this.setState({
              selectedOption: selectedOption
            });
          }
        
          function renderOption(option, selected, onSelect, index){
            const style = selected ? { fontWeight: 'bold', color: '#084598', fontSize: 23, alignSelf: 'center'} : { color: '#007aff', fontSize: 19, alignSelf: 'center' };
        
            return (
              <TouchableOpacity onPress={onSelect} key={index}>
                <Text style={style}>{option}</Text>
              </TouchableOpacity>
            );
          }
        
          function renderContainer(optionNodes){
            return <View style={{marginLeft: 10}} >{optionNodes}</View>;
          }

          // selecting salsa

          const salsa = ["none", "mild", "medium", "hot"];

          function setSelectedSalsa(selectedSalsa){
            this.setState({
              selectedSalsa: selectedSalsa
            });
          }
        
          function renderOption(option, selected, onSelect, index){
            const sideStyle = selected ? { fontWeight: 'bold', color: '#084598', fontSize: 19 } : { color: '#007aff', fontSize: 18 };
        
            return (
              <TouchableOpacity onPress={onSelect} key={index}>
                <Text style={sideStyle}>{option}</Text>
              </TouchableOpacity>
            );
          }
        
          //  selecting lettuce
          const lettuce = ['none', 'light', 'normal', 'extra']

          function setselectedLettuce(selectedLettuce){
            this.setState({
              selectedLettuce: selectedLettuce
            });
          }


          console.log(this.state)
        return(
            <MainContainer>
                <View  >
                <MainHeading >
                      Select an Entree
                 </MainHeading>
                </View>

                {/* Selecting an entree */}

                <DetailViewContainer style={{marginTop: -10}} >
                    <View style={styles.flexView} >
                        <RadioButtons
                            options={ options }
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
                    <DetailViewContainer style={{marginTop: -10}}>
                    
                    {/* Selecting Salsa */}
                    <View style={styles.linearView} >
                        <BoldText>
                            Salsa:
                        </BoldText>
                        <View>
                        <RadioButtons
                            options={ salsa }
                            onSelection={ setSelectedSalsa.bind(this) }
                            selectedOption={this.state.selectedSalsa }
                            renderOption={ renderOption }
                            renderContainer={RadioButtons.getViewContainerRenderer({ flexDirection: 'row',
                              justifyContent: 'space-between',
                              width: '78%',
                              paddingTop: 15,
                              })}
                            />
                            </View>
                        </View>

                        {/* selecting lettuce */}
                        <View style={styles.linearView} >
                        <BoldText>
                            Lettuce:
                        </BoldText>
                        <View>
                        <RadioButtons
                            options={ lettuce }
                            onSelection={ setselectedLettuce.bind(this) }
                            selectedOption={this.state.selectedLettuce }
                            renderOption={ renderOption }
                            renderContainer={RadioButtons.getViewContainerRenderer({ flexDirection: 'row',
                              justifyContent: 'space-between',
                              width: '78%',
                              paddingTop: 15,
                              marginLeft: -5
                              })}
                            />
                            </View>
                        </View>


                    </DetailViewContainer>
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
        padding: 15
    },
    linearView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }
}