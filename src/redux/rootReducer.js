import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import allUserReducer from './alluser/allUserReducer'

const rootReducer = combineReducers({
  user: userReducer,
  allusers: allUserReducer
})

export default rootReducer