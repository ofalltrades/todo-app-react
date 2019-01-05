import { combineReducers } from 'redux'

import todos from './todos'
import nextID from './nextID'

export default combineReducers({
  todos,
  nextID
})
