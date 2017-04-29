import { createStore, applyMiddleware } from 'redux'

import indexReducer from './reducers/indexReducer'
import AppSocket from './appSocket'

import routeByStart from '~/utility/routeByStart'

const socket = new AppSocket();

console.log(socket.send)

const actionSender = store => next => action => {
  routeByStart(action.type, {
   'USER': socket.send,
   'TAG': socket.send,
   'ARTIST_REQUEST': socket.send
 }, [action], socket)

  return next(action)
}

let store = createStore(
  indexReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(actionSender)
)

socket.subscribe((action) => {
  store.dispatch(JSON.parse(action))
})

export default store
