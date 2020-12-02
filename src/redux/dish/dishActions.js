import axios from 'axios'
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

export const setCore = (name) => {
    return {
      type: SET_CORE,
      name: name
    }
  }

export const resetCore = () => {
    return {
      type: RESET_CORE,
    }
  }

export const GetCustom = (recipe,wantsto,weight) => {
    return (dispatch) => {
      dispatch(customRequest())
      axios
        .get(`/custom?corerecipe=${recipe}&wantsto=${wantsto}&weight=${weight}`)
        .then(response => {
          const customrecipe = response.data
          dispatch(customSuccess(customrecipe))
        })
        .catch(error => {
          if (error.response) {
            dispatch(customFailure(error.response.data.message))
          } else {
            dispatch(customFailure(error.message))
          }
        })
    }
  }

export const GetCore = () => {
    return (dispatch) => {
      dispatch(coreRequest())
      axios
        .get('/recipe/all')
        .then(response => {
          const allCores = response.data
          dispatch(coreSuccess(allCores))
        })
        .catch(error => {
          if (error.response) {
            dispatch(coreFailure(error.response.data.message))
          } else {
            dispatch(coreFailure(error.message))
          }
        })
    }
  }

export const coreRequest = () => {
    return {
      type: CORE_REQUEST,
    }
  }
export const coreSuccess = (cores) => {
    return {
      type: CORE_SUCCESS,
      payload: cores
    }
  }
export const coreFailure = (error) => {
    return {
      type: CORE_FAILURE,
      payload: error 
    }
  }

export const customRequest = () => {
    return {
      type: CUSTOMIZED_REQUEST,
    }
  }
export const customSuccess = (custom) => {
    return {
      type: CUSTOMIZED_SUCCESS,
      payload: custom
    }
  }
export const customFailure = (error) => {
    return {
      type: CUSTOMIZED_FAILURE,
      payload: error 
    }
  }