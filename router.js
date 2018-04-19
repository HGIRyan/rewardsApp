import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Image, Button } from 'react-native';
import Home from './src/components/Home';
import Order from './src/components/Order';
import OrderConfirm from './src/components/OrderConfirm';
import Account from './src/components/Account';
import AccountSettings from './src/components/AccountSettings';
import History from './src/components/History';
import homeIcon from './src/assests/home2.png';
import orderIcon from './src/assests/order.png';
import accountIcon from './src/assests/account.png';
import historyIcon from './src/assests/history.png';
import Login from './src/components/Login';
import Photos from './src/components/Photos';
import PhotoDetails from './src/components/PhotoDetails';

export const OrderStack = StackNavigator({
    Order: {
        screen: Order,
        navigationOptions: {
            title: 'Order',
            tabBarIcon: ({ tintColor }) => <Image source={ orderIcon }/>      
        },
    },
    OrderConfirm: {
        screen: OrderConfirm,
        navigationOptions: {
            title: 'Confirm your Order',
            tabBarLabel: 'Order',
            tabBarIcon: () => <Image source={ orderIcon } />
        },
    },
});

export const AccountStack = StackNavigator({
    Account: {
        screen: Account,
        navigationOptions: {
            title: 'Account',
            tabBarIcon: () => <Image source={ accountIcon } />
        },
    },
    AccountSettings: {
        screen: AccountSettings,
        navigationOptions: {
            title: "Manage Account Info",
            tabBarLabel: "Account",
            tabBarIcon: () => <Image source={ accountIcon } />
        }
    },
    Photos: {
        screen: Photos,
        navigationOptions: {
            title: 'Upload Photo',
            tabBarLabel: "Account",
            tabBarIcon: () => <Image source={ accountIcon } />
    }
    }
})


// resource for this found at https://www.youtube.com/watch?v=C96piR3FRww or https://hackernoon.com/getting-started-with-react-navigation-the-navigation-solution-for-react-native-ea3f4bd786a4

export const Tabs = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => {
            return {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => <Image source={ homeIcon } name='Home' size={15} color={tintColor} />,
                headerRight: (<Button onPress={() => nagivation.navigate('Login')} title={'Logout'}/>)
            }
        }
        
            
        
    },
    Order: {
        screen: OrderStack,
    },
    Account: {
        screen: AccountStack,
        // navigationOptions: {
        //     tabBarIcon: () => <Image source={ accountIcon }/>
        // }
    },
    History: {
        screen: History,
        navigationOptions: {
            tabBarIcon: () => <Image source={ historyIcon } />
        }
    },
    
})

export const LoginStack = StackNavigator({
    // Login: {
    //     screen: Login,
    //     headerMode: 'none',

    // },
    Tabs: {
        screen: Tabs,
    },
},
    { headerMode: 'none'},
)

export const PhotoStack = StackNavigator({
    Photos: {
        screen: Photos,
    },
    PhotoDetails: {
        screen: PhotoDetails
    }
})
