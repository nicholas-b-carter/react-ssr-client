import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import employees from './employees'
import auth from './auth'
import admins from './admins'

export default combineReducers({
  form,
  employees,
  auth,
  admins
})
