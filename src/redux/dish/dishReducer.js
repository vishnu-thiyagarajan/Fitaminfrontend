import {
    CUSTOMIZED_REQUEST,
    CUSTOMIZED_SUCCESS,
    CUSTOMIZED_FAILURE,
    ADD_CORE_REQUEST,
    ADD_CORE_SUCCESS,
    ADD_CORE_FAILURE,
    ADD_CUSTOM_REQUEST,
    ADD_CUSTOM_SUCCESS,
    ADD_CUSTOM_FAILURE,
    CORE_REQUEST,
    CORE_SUCCESS,
    CORE_FAILURE,
    RESET_CORE,
    SET_CORE,
    RESET_UPDATE_CORE,
} from './dishActionTypes';

const initialState = {
    core: '',
    coreid: '',
    corerecipe: '',
    corenutrition: '',
    coreloading: false,
    customloading: false,
    customrecipe: '',
    customnutrition: '',
    allcores: [],
    error: '',
    newcoreadded: false,
    newcoreloading: false,
    newcustomadded: false,
    newcustomloading: false,
}

const dishReducer = (state=initialState, action)=>{
    switch(action.type){
        case SET_CORE:
            const selectedObj = state.allcores.find(obj => obj.name === action.name)
            return {
                ...state,
                core : action.name,
                corerecipe: selectedObj.recipe, 
                corenutrition: selectedObj.nutrition,
                customrecipe: '',
                customnutrition: '',
                coreid: selectedObj._id,
            }
        case RESET_CORE:
            return {
                ...state,
                core: '',
                corerecipe: '', 
                corenutrition: '',
                coreid: '',
            }
        case CORE_REQUEST:
            return {
                ...state,
                coreloading: true,
            }
        case CORE_SUCCESS:
            return {
                ...state,
                coreloading: false,
                allcores: action.payload
            }
        case CORE_FAILURE:
            return {
                ...state,
                coreloading: false,
                error: action.payload
            }
        case CUSTOMIZED_REQUEST:
            return {
                ...state,
                customloading: true,
            }
        case CUSTOMIZED_SUCCESS:
            return {
                ...state,
                customloading: false,
                customrecipe: action.payload.recipe,
                customnutrition: action.payload.nutrition,
            }
        case CUSTOMIZED_FAILURE:
            return {
                ...state,
                customloading: false,
                customrecipe: '',
                customnutrition: '',
                error: action.payload
            }
        case ADD_CORE_REQUEST:
            return {
                ...state,
                newcoreloading: true
            }
        case ADD_CORE_SUCCESS:
            return {
                ...state,
                newcoreloading: false,
                newcoreadded: true
            }
        case ADD_CORE_FAILURE:
            return {
                ...state,
                newcoreloading: false,
                newcoreadded: false,
                error: action.payload,
            }
        case ADD_CUSTOM_REQUEST:
            return {
                ...state,
                newcustomloading: true
            }
        case ADD_CUSTOM_SUCCESS:
            return {
                ...state,
                newcustomloading: false,
                newcustomadded: true
            }
        case ADD_CUSTOM_FAILURE:
            return {
                ...state,
                newcustomloading: false,
                newcustomadded: false,
                error: action.payload,
            }
        case RESET_UPDATE_CORE:
            return {
                ...state,
                newcoreadded: false,
                error: '',
                newcoreloading: false,
                newcustomadded: false,
                newcustomloading: false
            }
        default: return state
    }
}

export default dishReducer