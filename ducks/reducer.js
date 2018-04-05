import axios from 'axios';
import { BASEURL } from '../secrets.js';

const initialState = {
    user:[]
}

// --ACTION CONSTRAINTS--
const GET_USER = 'GET_USER';

// --ACTION CREATORS--
export function getUserInfo() {
    const userData = fetch(BASEURL+'/api/user/1')
          .then((res) => res.json())
    return {
        type: GET_USER,
        payload: userData
    }
}


// --REDUCER--
export default function reducer(state = initialState, action) {
    console.log('action fired!! ', action)

    switch (action.type) {
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });

        default:
            return state;
    }
}
