import { combineReducers } from 'redux'

import tagReducer from './tag'
import initReducer from './init'

var indexReducer = combineReducers({
  tagReducer,
  initReducer
})

export default indexReducer
