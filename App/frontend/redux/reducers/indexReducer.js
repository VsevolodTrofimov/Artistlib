import defaultState from '~/redux/defaultState'
import routeByStart from '~/utility/routeByStart'

import appReducer from './appReducer'
import userReducer from './userReducer'
import artistReducer from './artistReducer'
import filterReducer from './filterReducer'
import tagReducer from './tagReducer'
import menuReducer from './menuReducer'

function indexReducer(state = defaultState, action) {
   let res = routeByStart(action.type, {
    'APP': appReducer,
    'USER': userReducer,
    'ARTIST': artistReducer,
    'FILTER': filterReducer,
    'TAG': tagReducer,
    'MENU': menuReducer
  }, [state, action])

  return res ? res : state
}

export default indexReducer
