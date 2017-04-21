import defaultState from '~/redux/defaultState'
import routeByStart from '~/utility/routeByStart'

import authReducer from './authReducer'
import artistReducer from './artistReducer'
import filterReducer from './filterReducer'
import tagReducer from './tagReducer'

function indexReducer(state = defaultState, action) {
   var res = routeByStart(action.type, {
    'AUTH': authReducer,
    'ARTIST': artistReducer,
    'FILTER': filterReducer,
    'TAG': tagReducer
  }, [state, action])

  return res || state
}

export default indexReducer
