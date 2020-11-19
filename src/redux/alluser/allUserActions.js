import axios from 'axios'
import {
  READ_ALL_USER_REQUEST,
  READ_ALL_USER_SUCCESS,
  READ_ALL_USER_FAILURE,
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
