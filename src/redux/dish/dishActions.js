import axios from 'axios'
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
    RESET_UPDATE_CORE,
    SET_CORE,
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

export const AddCoreRecipe = (obj) => {
    return (dispatch) => {
      dispatch(addCoreRequest())
      axios
        .post('/recipe', obj)
        .then(response => {
          console.log(response)
          const newcore = response.data
          dispatch(addCoreSuccess(newcore))
        })
        .catch(error => {
          if (error.response) {
            dispatch(addCoreFailure(error.response.data.message))
          } else {
            dispatch(addCoreFailure(error.message))
          }
        })
    }
  }

export const AddCustomRecipe = (obj) => {
    return (dispatch) => {
      dispatch(addCustomRequest())
      axios
        .post('/custom', obj)
        .then(response => {
          console.log(response)
          const newcustom = response.data
          dispatch(addCustomSuccess(newcustom))
        })
        .catch(error => {
          if (error.response) {
            dispatch(addCustomFailure(error.response.data.message))
          } else {
            dispatch(addCustomFailure(error.message))
          }
        })
    }
  }
  export const addCustomRequest = () => {
    return {
      type: ADD_CUSTOM_REQUEST,
    }
  }
export const addCustomSuccess = () => {
    return {
      type: ADD_CUSTOM_SUCCESS,
    }
  }
export const addCustomFailure = (error) => {
    return {
      type: ADD_CUSTOM_FAILURE,
      payload: error 
    }
  }

export const addCoreRequest = () => {
    return {
      type: ADD_CORE_REQUEST,
    }
  }
export const addCoreSuccess = (core) => {
    return {
      type: ADD_CORE_SUCCESS,
      payload: core
    }
  }
export const addCoreFailure = (error) => {
    return {
      type: ADD_CORE_FAILURE,
      payload: error 
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

export const resetUpdateCore = () => {
  return {
    type: RESET_UPDATE_CORE,
    }
  }
