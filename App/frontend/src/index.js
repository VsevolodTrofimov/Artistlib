import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './index.css'
import './vars.css'

var artists = [{
  name: 'mvv',
  tags: {
    global: ['a', 'Solo'],
    personal: ['10/10']
  }
}, {
  name: 'GAE (into rain)',
  tags: {
    global: ['Personal Style'],
    personal: []
  }
}, {
  name: 'ke-ta',
  tags: {
    global: ['b'],
    personal: []
  }
}]

ReactDOM.render(
  <App artists={artists} />,
  document.getElementById('root')
)
