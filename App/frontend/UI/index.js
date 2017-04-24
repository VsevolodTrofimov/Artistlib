import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from '~/redux/store'

import ArtistListContainer from '~/UI/pages/artistList/artistListContainer'
import AuthScreenContainer from '~/UI/pages/auth/authScreenContainer'

import './index.css'

function render() {

  function App(auth) {
    if(auth) {
      return <ArtistListContainer />
    } else {
      return <AuthScreenContainer />
    }
  }

  ReactDOM.render(
    <Provider store = {store}>
      {App(store.getState().authToken)}
    </Provider>,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()
