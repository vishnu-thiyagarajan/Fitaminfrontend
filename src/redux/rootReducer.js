import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import dishReducer from './dish/dishReducer'
import allUserReducer from './alluser/allUserReducer'

const rootReducer = combineReducers({
  user: userReducer,
  allusers: allUserReducer,
  dish: dishReducer,
})

export default rootReducer