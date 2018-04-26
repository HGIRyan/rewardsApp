
import axios from 'axios';
import { BASEURL } from '../secrets.js';

const initialState = {
    user: [],
    cart: [],
    cartTotal: 0,
    usersOrder: [],
    userInfo: {},
    getUserInfoStatus: '',
    updateUserStatus: ''
}

// --ACTION CONSTRAINTS--
const GET_USER = 'GET_USER';
    const UPDATE_USER = 'UPDATE_USER';
    const NEW_ORDER = 'NEW_ORDER';


const ADD_TO_CART = 'ADD_TO_CART';
const ITEMS_IN_CART = 'ITEMS_IN_CART';
const SEND_USER_INFO = 'SEND_USER_INFO';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CALCULATE_CART = 'CALCULATE_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const ITEMS_IN_CART = 'ITEMS_IN_CART';
const SEND_USER_INFO = 'SEND_USER_INFO';


// --ACTION CREATORS--
export function getUserInfo() {
    const userData = fetch(BASEURL + '/api/user/1')
        .then((res) => res.json())
    return {
        type: GET_USER,
        payload: userData
    }
}
export function updateUserInfo(id, body) {
    console.log('ID::', id, "BODY::", body)
    const updatedUserData = axios.put(BASEURL + `/api/update/user/${id}`, body)
        .then(res => {
            return res.data
        })
    return {
        type: UPDATE_USER,
        payload: updatedUserData
    }
}
export function newOrder(body) {
    const orderData = axios.post(BASEURL + '/api/order/new', body)
        .then(res => {
            return res.data
        })
    return {
        type: NEW_ORDER,
        payload: orderData
    }
}
export function addToCart(val) {
    return {
        type: ADD_TO_CART,
        payload: val
    }
}
export function removeFromCart(val) {
    return {
        type: REMOVE_FROM_CART,
        payload: val
    }
}
export function calculateCart(cart) {
    return {
        type: CALCULATE_CART,
        payload: cart
    }
}


export function sendUserInfo(body) {
    const userData = axios.post(BASEURL + `/api/user/info/`, body)
        .then(res => {
            return res.data
        })
    return {
        type: SEND_USER_INFO,
        payload: userData
    }
}



// --REDUCER--
export default function reducer(state = initialState, action) {
    console.log('action fired!! ', action)

    switch (action.type) {
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });

        case UPDATE_USER + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload, updateUserStatus: action.type });
        case UPDATE_USER + '_PENDING':
            return Object.assign({}, state, { updateUserStatus: action.type });
        case UPDATE_USER + '_REJECTED':
            return Object.assign({}, state, { updateUserStatus: action.type });

        case NEW_ORDER + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });

        case ADD_TO_CART:
            let newItem = state.cart.slice()
            newItem.push(action.payload)
            console.log(newItem)
            return Object.assign({}, state, { cart: newItem });


        case REMOVE_FROM_CART:
            let removedItem = state.cart.slice()
            removedItem.splice(action.payload, 1)
            return Object.assign({}, state, { cart: removedItem });
        
        case CALCULATE_CART:
        console.log('calculating total')
        let cart = state.cart;
        let total = 0;
        for (let i = 0; i <= cart.length - 1; i++) {
            total = total + cart[i].Price
        }
       return Object.assign({}, state, {cartTotal: total})

            case SEND_USER_INFO + '_PENDING':
                return Object.assign({}, state, {getUserInfoStatus: action.type  });
            case SEND_USER_INFO + '_REJECTED':
                return Object.assign({}, state, { getUserInfoStatus: action.type  });
            case SEND_USER_INFO + '_FULFILLED':
               return Object.assign({}, state, { user: action.payload,  getUserInfoStatus: action.type  });
            
        default:
            return state;
    }
}






