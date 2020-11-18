import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOGOUT_USER,
  } from './userActionTypes';
const initialState = { loading: false, error: '', user: null, isAuthenticated:false }

const userReducer = (state=initialState, action)=>{
    switch(action.type){
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case LOGIN_USER_FAILURE:
            return {
                loading: false,
                user: null,
                isAuthenticated: false,
                error: action.payload
            }
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case REGISTER_USER_FAILURE:
            return {
                loading: false,
                user: null,
                isAuthenticated: false,
                error: action.payload
            }
        case LOGOUT_USER:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: ''
            }
        default: return state
    }
}

export default userReducer