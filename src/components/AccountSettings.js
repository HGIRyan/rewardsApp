import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';

import { updateUserInfo } from '../../ducks/reducer';
import { AccountInput } from '../../styles/Inputs';
import { MainHeading } from '../../styles/Texts';
import { TwoButtonContainer } from '../../styles/Buttons';
import HalfButton from './HalfButton';
import { HalfButtonPush, HalfButtonText } from '../../styles/Buttons';
import { MainContainer } from '../../styles/Views';
import profilePic from '../assests/profile.png';



class Account extends Component {

    state = {
        // name: 'michael',
        phone: 'phone number',
        email: 'email address',
        DOB: 'MM/DD/YYYY',
        newFirstName: '',
        newLastName: '',
        newPhone: '',
        newEmail: '',
        newDOB: ''
    }

    goToAccount = () => {
        this.props.navigation.pop()
    }
    saveUser(){
        const user = this.props.user;

        let userUpdatedInfo = {
            
            "firstname": ( this.state.newFirstName.length >=1 ? this.state.newFirstName : user.firstname ) ,
            "lastname":( this.state.newLastName.length >=1 ? this.state.newLastName : user.lastname ) ,
            "email":( this.state.newEmail.length >=1 ? this.state.newEmail : user.email ) ,
            "picture":"https://lh5.googleusercontent.com/-2pmHCiYS-3s/AAAAAAAAAAI/AAAAAAAAX20/J7yVcv6GHn8/photo.jpg",
            "birthday":( this.state.newDOB.length >=1 ? this.state.newDOB : user.birthday ) ,
            "phone":( this.state.newPhone.length >=1 ? this.state.newPhone : user.phone ) ,
        }
        this.props.updateUserInfo(userUpdatedInfo)
        .then( _=> {
            return this.goToAccount()
        })
    }

    render() {
        const user = this.props.user;
        var options = { month: 'long', day: 'numeric' , year: 'numeric'  };

        // console.log(this.state.phone)
        // console.log(this.state.email)

// resource for react native inputs: https://facebook.github.io/react-native/docs/textinput.html#onsubmitediting

        return(
            <MainContainer>
                <MainHeading >
                     Edit Account Information
                 </MainHeading>
                 <View style={ styles.profilePic } >
                    <Image source={profilePic}  />
                 </View>
                <AccountInput 
                    onChangeText={(newFirstName) => this.setState({newFirstName})}
                    placeholder={user.firstname}>
                </AccountInput>
                <AccountInput 
                    onChangeText={(newLastName) => this.setState({newLastName})}
                    placeholder={user.lastname }>
                </AccountInput>
                <AccountInput 
                    onChangeText={(newPhone) => this.setState({newPhone})}
                    placeholder={user.phone}>
                </AccountInput>
                <AccountInput 
                    onChangeText={(newEmail) => this.setState({newEmail})}
                    placeholder={user.email}>
                </AccountInput>
                <AccountInput 
                    onChangeText={(newDOB) => this.setState({newDOB})}
                    
                    placeholder={new Date( user.birthday.slice(0,10).split('-').join(',')).toLocaleDateString('en-us', options)}>
                </AccountInput>
                <TwoButtonContainer>

                    <HalfButtonPush  
                        onPress={ () => this.saveUser() }>
                        <HalfButtonText>
                        Save
                        </HalfButtonText>
                    </HalfButtonPush>


                    <HalfButtonPush cancel 
                        onPress={ () => this.goToAccount() }>
                        <HalfButtonText>
                            Cancel
                        </HalfButtonText>
                    </HalfButtonPush>
                </TwoButtonContainer>
            </MainContainer>
        )
    }
}
function mapStateToProps(state) {
    return {
      user: state.user
    }
  }
  
  export default connect(mapStateToProps, { updateUserInfo })(Account);

const styles = {
    profilePic: {
        alignSelf: 'center',
        height: 200,
        width: 200
    }
 }