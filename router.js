import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Image } from 'react-native';
// import { Icon } from 'react-native-elements';
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
    }
})


// resource for this found at https://www.youtube.com/watch?v=C96piR3FRww or https://hackernoon.com/getting-started-with-react-navigation-the-navigation-solution-for-react-native-ea3f4bd786a4

export const Tabs = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => <Image source={ homeIcon } name='Home' size={15} color={tintColor} />

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