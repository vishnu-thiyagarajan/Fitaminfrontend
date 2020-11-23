import axios from 'axios'
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGOUT_USER,
} from './userActionTypes';
export const LogoutUser = () => {
    return (dispatch) => {
      dispatch(logout())    
    }
}

export const LoginUser = (email,password) => {
  return (dispatch) => {
    dispatch(loginUserRequest())
    axios
      .post('/login', {email, password})
      .then(response => {
        const user = response.data
        dispatch(loginUserSuccess(user))
        axios.defaults.headers.common['Authorization'] = 'Bearer '+ user.token;
        localStorage.setItem('user', JSON.stringify(user))
      })
      .catch(error => {
        if (error.response) {
          dispatch(loginUserFailure(error.response.data.message))
        } else {
          dispatch(loginUserFailure(error.message))
        }
      })
  }
}

export const RegisterUser = (name,email,password,role) => {
  return (dispatch) => {
    dispatch(registerUserRequest())
    axios
      .post('/register', {name, email, password, role})
      .then(response => {
        const user = response.data
        dispatch(registerUserSuccess(user))
      })
      .catch(error => {
        if (error.response) {
          dispatch(registerUserFailure(error.response.data.message))
        } else {
          dispatch(registerUserFailure(error.message))
        }
      })
  }
}

export const loginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST
  }
}

export const loginUserSuccess = user => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user
  }
}

export const loginUserFailure = error => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error
  }
}

export const registerUserRequest = () => {
  return {
    type: REGISTER_USER_REQUEST
  }
}

export const registerUserSuccess = data => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: data
  }
}

export const registerUserFailure = error => {
  return {
    type: REGISTER_USER_FAILURE,
    payload: error
  }
}

export const logout = () => {
    localStorage.clear();
    axios.defaults.headers.common['Authorization'] = ''
    return {
        type : LOGOUT_USER,
        payload : null
    }
}