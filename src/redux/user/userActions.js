import axios from 'axios'
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_SUCCESS,
  ACCOUNT_ACTIVATION_FAILURE,
  ACCOUNT_ACTIVATION_SUCCESS,
  ACCOUNT_ACTIVATION_REQUEST,
  LOGOUT_USER,
} from './userActionTypes';
export const LogoutUser = () => {
    return (dispatch) => {
      dispatch(logout())    
    }
}

export const LoginUser = (email,password,checked) => {
  return (dispatch) => {
    dispatch(loginUserRequest())
    axios
      .post('/login', {email, password})
      .then(response => {
        const user = response.data
        if (checked) localStorage.setItem('user', JSON.stringify(user))
        axios.defaults.headers.common['Authorization'] = 'Bearer '+ user.token;
        dispatch(loginUserSuccess(user))
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
        dispatch(registerUserSuccess(response.data))
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

export const AccountActivation = (obj) => {
  return (dispatch) => {
    dispatch(accountActivationRequest())
    axios
      .put('/activate', obj)
      .then(response => {
        const user = response.data
        localStorage.setItem('user', JSON.stringify(user))
        axios.defaults.headers.common['Authorization'] = 'Bearer '+ user.token;
        dispatch(accountActivationSuccess(user))
      })
      .catch(error => {
          dispatch(accountActivationFailure(error.message))
      })
  }
}

export const ForgotPassword = (obj) => {
  return (dispatch) => {
    dispatch(forgotPasswordRequest())
    axios
      .put('/forgotpassword', obj)
      .then(response => {
        dispatch(forgotPasswordSuccess(response.data))
      })
      .catch(error => {
          dispatch(forgotPasswordFailure(error.message))
      })
  }
}

export const ResetPassword = (obj) => {
  return (dispatch) => {
    dispatch(resetPasswordRequest())
    axios
      .put('/resetpassword', obj)
      .then(response => {
        dispatch(resetPasswordSuccess(response.data))
      })
      .catch(error => {
          dispatch(resetPasswordFailure(error.message))
      })
  }
}

export const forgotPasswordRequest = () => {
  return {
    type: FORGOT_PASSWORD_REQUEST
  }
}

export const forgotPasswordSuccess = obj => {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
    payload: obj
  }
}

export const forgotPasswordFailure = error => {
  return {
    type: FORGOT_PASSWORD_FAILURE,
    payload: error
  }
}

export const accountActivationRequest = () => {
  return {
    type: ACCOUNT_ACTIVATION_REQUEST
  }
}

export const accountActivationSuccess = user => {
  return {
    type: ACCOUNT_ACTIVATION_SUCCESS,
    payload: user
  }
}

export const accountActivationFailure = error => {
  return {
    type: ACCOUNT_ACTIVATION_FAILURE,
    payload: error
  }
}

export const resetPasswordRequest = () => {
  return {
    type: RESET_PASSWORD_REQUEST
  }
}

export const resetPasswordSuccess = obj => {
  return {
    type: RESET_PASSWORD_SUCCESS,
    payload: obj
  }
}

export const resetPasswordFailure = error => {
  return {
    type: RESET_PASSWORD_FAILURE,
    payload: error
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