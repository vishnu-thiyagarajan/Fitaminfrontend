import axios from 'axios'
import {
  READ_ALL_USER_REQUEST,
  READ_ALL_USER_SUCCESS,
  READ_ALL_USER_FAILURE,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  RESET_UPDATE_USER,
  DELETE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  DELETE_USER_REQUEST,
  CREATE_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
} from './allUserActionsTypes';

export const getAllUsers = () => {
  return (dispatch) => {
    dispatch(getAllUserRequest())
    axios
      .get('/allusers')
      .then(response => {
        const users = response.data
        dispatch(getAllUserSuccess(users))
      })
      .catch(error => {
          dispatch(getAllUserFailure(error.message))
      })
  }
}

export const updateUserAllUsers = (obj) => {
  return (dispatch) => {
    dispatch(updateUserRequest())
    axios
      .put('/user', obj)
      .then(response => {
        // const users = response.data
        dispatch(updateUserSuccess(obj))
      })
      .catch(error => {
          dispatch(updateUserFailure(error.message))
      })
  }
}

export const deleteUserAllUsers = (obj) => {
  return (dispatch) => {
    dispatch(deleteUserRequest())
    axios
      .delete('/user',  { data: { ...obj } })
      .then(response => {
        // const users = response.data
        dispatch(deleteUserSuccess(obj))
      })
      .catch(error => {
          dispatch(deleteUserFailure(error.message))
      })
  }
}

export const createUserAllUsers = (obj) => {
  return (dispatch) => {
    dispatch(createUserRequest())
    axios
      .post('/createuser', obj)
      .then(response => {
        const user = response.data
        dispatch(createUserSuccess(user))
      })
      .catch(error => {
          dispatch(createUserFailure(error.message))
      })
  }
}

export const getAllUserRequest = () => {
  return {
    type: READ_ALL_USER_REQUEST
  }
}

export const getAllUserSuccess = users => {
  return {
    type: READ_ALL_USER_SUCCESS,
    payload: users
  }
}

export const getAllUserFailure = error => {
  return {
    type: READ_ALL_USER_FAILURE,
    payload: error
  }
}

export const updateUserRequest = () => {
  return {
    type: UPDATE_USER_REQUEST
  }
}

export const updateUserSuccess = users => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: users
  }
}

export const updateUserFailure = error => {
  return {
    type: UPDATE_USER_FAILURE,
    payload: error
  }
}

export const resetUpdateUser = () => {
  return {
    type: RESET_UPDATE_USER,
  }
}

export const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST
  }
}

export const deleteUserSuccess = user => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: user
  }
}

export const deleteUserFailure = error => {
  return {
    type: DELETE_USER_FAILURE,
    payload: error
  }
}

export const createUserRequest = () => {
  return {
    type: CREATE_USER_REQUEST
  }
}

export const createUserSuccess = user => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: user
  }
}

export const createUserFailure = error => {
  return {
    type: CREATE_USER_FAILURE,
    payload: error
  }
}