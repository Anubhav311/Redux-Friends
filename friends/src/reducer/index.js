import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/index';
import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions/index';
import { DELETE_FRIEND_START, DELETE_FRIEND_SUCCESS, DELETE_FRIEND_FAILURE } from '../actions/index';

const initialstate = {
    friends: [],
    error: '',
    loggingIn: false,
    fetchingData: false,
}

const reducer = (state = initialstate, action) => {
    switch(action.type) {
        case LOGIN_START:
        return {
            ...state,
            error: '',
            loggingIn: true
        };
        case LOGIN_SUCCESS:
        return {
            ...state,
            error: '',
            loggingIn: false,
        };
        case FETCH_DATA_SUCCESS:
        return {
            ...state,
            error: '',
            fetchingData: false,
            friends: action.payload
        }
        case DELETE_FRIEND_SUCCESS:
        console.log(action)
        return {
            ...state,
            error: '',
            friends: action.payload
        }
        default:
        return state;
    }
}

export default reducer;