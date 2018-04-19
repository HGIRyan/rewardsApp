import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, ScrollView } from 'react-native';

import { getUserInfo } from '../../ducks/reducer';
import Button from './Button';
import { MainHeading, SubHeading, BoldText } from '../../styles/Texts';
import { ButtonContainer, TwoButtonContainer } from '../../styles/Buttons';
import { MainContainer, AccountDetailsView, DetailViewContainer } from '../../styles/Views';
// import profilePic from '../assests/profile.png';

class Account extends Component {

    state = {
        name: "",
        phone: "",
        email: '',
        DOB: ''
    }
    componentWillMount() {
        // this.props.getUserInfo()
    }

    goToAccountSettings = () => {
        this.props.navigation.navigate('AccountSettings')
    }


    render() {
        const user = this.props.user;
        var options = { month: 'long', day: 'numeric' , year: 'numeric'  };
console.log('USER:',user)

        return(
            <MainContainer> 
                <MainHeading >
                    Account Information
                </MainHeading>
                <View style={ styles.profilePic } >
                    <Image source=
                    {{ uri: user.picture}}  
                    style={{width: 200, height: 200, borderRadius:100}} />
                </View>
                
                <DetailViewContainer>
                    
                <ScrollView
                    directionalLockEnabled={true}
                    horizontal={true}
                    vertical={false}>
                    <View style={styles.scrollContainer} >
                    <AccountDetailsView>
                        <BoldText>
                            Name:
                        </BoldText>
                        <SubHeading >
                        { !user.firstname ? null:user.firstname +' ' + user.lastname}
                        </SubHeading>
                    </AccountDetailsView>

                    <AccountDetailsView>
                        <BoldText>
                            Phone Number:
                        </BoldText>
                        <SubHeading >
                        { !user.firstname ? null:user.phone}
                        </SubHeading>
                    </AccountDetailsView>

                    <AccountDetailsView>
                        <BoldText>
                            Email:
                        </BoldText>
                        <SubHeading >
                        { !user.firstname ? null:user.email}
                        </SubHeading>
                    </AccountDetailsView>

                    <AccountDetailsView>
                        <BoldText>
                            Date of Birth:
                        </BoldText>
                        <SubHeading >
                            { !user.birthday ? null:
                            new Date( user.birthday.slice(0,10).split('-').join(',')).toLocaleDateString('en-us', options)
                            
                            }
                        </SubHeading>
                    </AccountDetailsView>
                    </View>
                    </ScrollView>
                   
                </DetailViewContainer>
               
                <ButtonContainer>
                    <Button onPress={ () => this.goToAccountSettings() }>
                        Edit Account Info
                    </Button>
                </ButtonContainer>
            </MainContainer>
        )
    }
}

function mapStateToProps(state) {
    return {
      user: state.user
    }
  }
  
  export default connect(mapStateToProps, { getUserInfo })(Account);

const styles = {
   profilePic: {
       alignSelf: 'center',
       width: 200,
       height: 200,
   },
   scrollContainer: {
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'flex-start',
       alignItems: 'flex-start'
   }
}