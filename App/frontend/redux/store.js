import { createStore, applyMiddleware } from 'redux'

import userAuth from '@/actionFactories/userAuth'

import indexReducer from './reducers/indexReducer'
import AppSocket from './appSocket'

import routeByStart from '~/utility/routeByStart'

const socket = new AppSocket();

const actionSender = store => next => action => {
  routeByStart(action.type, {
   'USER': socket.send,
   'TAG': socket.send,
   'ARTIST_REQUEST': socket.send,
   'ARTIST_REMOVE': socket.send
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

socket.onReconnect(() => {
  let authToken = store.getState().authToken
  if(authToken) socket.send(userAuth.factory({tokenObj: {id_token: authToken}}))
})

export default store
