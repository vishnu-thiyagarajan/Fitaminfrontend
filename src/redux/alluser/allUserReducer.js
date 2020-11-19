import {
    READ_ALL_USER_REQUEST,
    READ_ALL_USER_SUCCESS,
    READ_ALL_USER_FAILURE,
  } from './allUserActionsTypes';
const initialState = { loading: false, error: '', users: [] }

const allUserReducer = (state=initialState, action)=>{
    switch(action.type){
        case READ_ALL_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case READ_ALL_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case READ_ALL_USER_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default: return state
    }
}

export default allUserReducer