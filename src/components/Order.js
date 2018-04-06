import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Button from './Button';
import { MainHeading, BoldText, SubHeading } from '../../styles/Texts';
import { ButtonContainer } from '../../styles/Buttons';
import { MainContainer, AccountDetailsView, DetailViewContainer } from '../../styles/Views';
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons'
import cartIcon from '../assests/cart.png';

// source for radio buttons https://github.com/ArnaudRinquin/react-native-radio-buttons/blob/master/examples/App.js

export default class Order extends Component {

    state = {
        selectedOption: '',
        // selectedOptionLabel: '',
        selectedMeat: '',
        selectedSalsa: '',
        selectedLettuce: '',
        selectedTomatoes: '',
        selectedBeans:  '',
    }

    goToOrderConfirm = () => {
        this.props.navigation.navigate('OrderConfirm')
    }

    render() {
        //       Selecting and entree
        const options = [ 
            {label: "Taco", value: 3}, 
            {label: "Salad", value: 7}, 
            {label: "Nachos", value: 6}, 
            {label: "Burrito", value: 8}
        ];

        const extractText = (option) => option.label;
        const normalStyle = {
            color: 'red'
          };
          
          const selectedStyle = {
            color: '#f80046',
            fontWeight: 'bold'
          };

          function setSelectedOption(selectedOption){
            this.setState({
              selectedOption: selectedOption,
            //   selectedOptionLabel: selectedOption.label
            });
          }
        
          function renderOption1(option, selected, onSelect, index){
            const style = selected ? { fontWeight: 'bold', color: '#084598', fontSize: 23, alignSelf: 'center'} : { color: '#007aff', fontSize: 19, alignSelf: 'center' };
        
            return (
              <TouchableOpacity onPress={onSelect} key={index}>
                <Text style={style}>{option.label}</Text>
              </TouchableOpacity>
            );
          }
        
          function renderContainer(optionNodes){
            return <View style={{marginLeft: 10}} >{optionNodes}</View>;
          }
          // selecting a meat

          const meat = ['none', 'chicken', 'steak', 'pork']

          function setSelectedMeat(selectedMeat){
            this.setState({
              selectedMeat: selectedMeat
            });
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
          const sides = ['none', 'light', 'normal', 'extra']

          function setselectedLettuce(selectedLettuce){
            this.setState({
              selectedLettuce: selectedLettuce
            });
          }

          // selecting tomatoes
          function setselectedTomatoes(selectedTomatoes){
            this.setState({
              selectedTomatoes: selectedTomatoes
            });
          }

          // selecting beans

          function setselectedBeans(selectedBeans){
            this.setState({
              selectedBeans: selectedBeans
            });
          }



          console.log(this.state)
        return(
            <MainContainer>
                <View  >
                    <MainHeading >
                        Select an Entree
                    </MainHeading>
                    <TouchableOpacity style={styles.cartIcon} onPress={ () => this.goToOrderConfirm() } >
                        <Image source={cartIcon}  />
                    </TouchableOpacity>
                </View>

                {/* Selecting an entree */}

                <DetailViewContainer style={{marginTop: -10}} >
                    <View style={styles.flexView} >
                        {/* <RadioButtons
                            options={ options }
                            onSelection={ setSelectedOption.bind(this) }
                            selectedOption={this.state.selectedOption }
                            renderOption={ renderOption1 }
                            // renderOptions={RadioButtons.getTextOptionRenderer(extractText)}

                            renderContainer={ renderContainer }
                            /> */}

                            <SegmentedControls
                                selectedTint= {'red'}
                                options={ options }
                                onSelection={ setSelectedOption.bind(this) }
                                selectedOption={ this.state.selectedOption.label }
                                // renderOption={ renderOption1 }
                                extractText={ (option) => option.label }
                                />
                            <AccountDetailsView>
                                <BoldText>
                                    Selected Entree:
                                </BoldText>
                                <SubHeading>
                                    {this.state.selectedOption.label || 'none'}
                                </SubHeading>
                            </AccountDetailsView>
                        </View>
                    </DetailViewContainer>
                    <MainHeading >
                      Choose your Toppings
                    </MainHeading>
                    <DetailViewContainer style={{marginTop: -10}}>

                    {/* selecting meat */}

                    <View style={styles.linearView} >
                        <BoldText>
                            Meat:
                        </BoldText>
                        <View>
                            <RadioButtons                                              options={ meat }
                                onSelection={ setSelectedMeat.bind(this) }
                                selectedOption={this.state.selectedMeat }
                                renderOption={ renderOption }
                                renderContainer={RadioButtons.getViewContainerRenderer({ flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '80%',
                                paddingTop: 15,
                                })}
                                />
                        </View>
                    </View>

                    
                    {/* Selecting Salsa */}
                    <View style={styles.linearView} >
                        <BoldText style={{paddingTop: -5}}>
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
                                })}
                                />
                        </View>
                    </View>

                        {/* selecting lettuce */}
                    <View style={styles.linearView} >
                        <BoldText style={{paddingTop: -5}}>
                            Lettuce:
                        </BoldText>
                        <View>
                            <RadioButtons
                                options={ sides }
                                onSelection={ setselectedLettuce.bind(this) }
                                selectedOption={this.state.selectedLettuce }
                                renderOption={ renderOption }
                                renderContainer={RadioButtons.getViewContainerRenderer({ flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '78%',
                                marginLeft: -5
                                })}
                                />
                        </View>
                    </View>
                            
                            {/* selecting tomatoes */}
                    <View style={styles.linearView} >
                        <BoldText style={{paddingTop: -5}}>
                            Tomato:
                        </BoldText>
                        <View>
                            <RadioButtons
                                options={ sides }
                                onSelection={ setselectedTomatoes.bind(this) }
                                selectedOption={this.state.selectedTomatoes }
                                renderOption={ renderOption }
                                renderContainer={RadioButtons.getViewContainerRenderer({ flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '78%',
                                marginLeft: -5
                                })}
                                />
                        </View>
                    </View>

                        {/* selecting beans */}
                    <View style={styles.linearView} >
                        <BoldText style={{paddingTop: -5}}>
                            Beans:
                        </BoldText>
                        <View>
                            <RadioButtons
                                options={ sides }
                                onSelection={ setselectedBeans.bind(this) }
                                selectedOption={this.state.selectedBeans }
                                renderOption={ renderOption }
                                renderContainer={RadioButtons.getViewContainerRenderer({ flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '78%',
                                })}
                                />
                        </View>
                    </View>



                    </DetailViewContainer>
                <ButtonContainer>
                    <Button onPress={ () => this.goToOrderConfirm() }>
                        Add Item to Cart
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
    },
    cartIcon: {
        position: 'absolute',
        top: 15,
        right: 10
    }
}