import {
    READ_ALL_USER_REQUEST,
    READ_ALL_USER_SUCCESS,
    READ_ALL_USER_FAILURE,
    UPDATE_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    RESET_UPDATE_USER,
    DELETE_USER_REQUEST,
    DELETE_USER_FAILURE,
    DELETE_USER_SUCCESS,
    CREATE_USER_SUCCESS,
    CREATE_USER_REQUEST,
    CREATE_USER_FAILURE,
  } from './allUserActionsTypes';
const initialState = { loading: false, error: '', users: [], updated: false, updateloading: false, added: false }

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
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        case UPDATE_USER_SUCCESS:
            const foundIndex = state.users.findIndex(x => x.email === action.payload.email);
            state.users[foundIndex].name = action.payload.name;
            state.users[foundIndex].role = action.payload.role;
            return {
                ...state,
                updated: true,
                updateloading: false,
            }
        case UPDATE_USER_REQUEST:
            return {
                ...state,
                updated: false,
                updateloading: true,
            }
        case UPDATE_USER_FAILURE:
            return {
                ...state,
                updated: false,
                updateloading: false,
            }
        case RESET_UPDATE_USER:
            return {
                ...state,
                added: false,
                updated: false,
                updateloading: false
            }
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                users : state.users.filter(x => x.email !== action.payload.email)
            }
        case DELETE_USER_REQUEST:
            return {
                ...state,
            }
        case DELETE_USER_FAILURE:
            return {
                ...state,
            }
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                users : [...state.users,action.payload],
                added: true,
            }
        case CREATE_USER_REQUEST:
            return {
                ...state,
                added: false,
            }
        case CREATE_USER_FAILURE:
            return {
                ...state,
                added: false,
                error: action.payload
            }
        default: return state
    }
}

export default allUserReducer