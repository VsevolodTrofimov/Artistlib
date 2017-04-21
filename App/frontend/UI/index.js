import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from '~/redux/store'
import ArtistListContainer from '~/UI/pages/artistList/artistListContainer'

import './index.css'

function render() {
  console.log('RERENDER')
  ReactDOM.render(
    <Provider store = {store}>
      <ArtistListContainer />
    </Provider>,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()
