import defaultState from '~/redux/defaultState'
import routeByStart from '~/utility/routeByStart'

import authReducer from './userReducer'
import artistReducer from './artistReducer'
import filterReducer from './filterReducer'
import tagReducer from './tagReducer'
import menuReducer from './menuReducer'

function indexReducer(state = defaultState, action) {
   let res = routeByStart(action.type, {
    'USER': authReducer,
    'ARTIST': artistReducer,
    'FILTER': filterReducer,
    'TAG': tagReducer,
    'MENU': menuReducer
  }, [state, action])

  return res ? res : state
}

export default indexReducer
