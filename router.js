import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Image } from 'react-native';
// import { Icon } from 'react-native-elements';
import Home from './src/components/Home';
import Order from './src/components/Order';
import OrderConfirm from './src/components/OrderConfirm';
import Account from './src/components/Account';
import History from './src/components/History';
import homeIcon from './src/assests/home.png';

export const OrderStack = StackNavigator({
    Order: {
        screen: Order,
        navigationOptions: {
            title: 'Order',
        },
    },
    OrderConfirm: {
        screen: OrderConfirm,
        navigationOptions: {
            title: 'Confirm your Order',
            tabBarLabel: 'Order',
        },
    },
});

// resource for this found at https://www.youtube.com/watch?v=C96piR3FRww or https://hackernoon.com/getting-started-with-react-navigation-the-navigation-solution-for-react-native-ea3f4bd786a4

export const Tabs = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => <Image source={homeIcon} name='home' size={15} color={tintColor} />

        }
    },
    Order: {
        screen: OrderStack,
    },
    Account: {
        screen: Account,
    },
    History: {
        screen: History,
    },
    
})