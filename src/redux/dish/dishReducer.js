import {
    CUSTOMIZED_REQUEST,
    CUSTOMIZED_SUCCESS,
    CUSTOMIZED_FAILURE,
    CORE_REQUEST,
    CORE_SUCCESS,
    CORE_FAILURE,
    RESET_CORE,
    SET_CORE,
    RESET_WEIGHT,
    SET_WEIGHT,
    RESET_WANTSTO,
    SET_WANTSTO,
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
    error: ''
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
                error: action.payload
            }
        default: return state
    }
}

export default dishReducer