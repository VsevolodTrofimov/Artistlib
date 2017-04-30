import React from 'react'
import GoogleLogin from 'react-google-login'

import './auth.css'

export default class AuthScreen extends React.Component {
  render() {
    return (
      <div className='auth column items-center'>
        <GoogleLogin
          clientId = { this.props.clientId }
          onSuccess = { this.props.onSuccess }
          onFailure = { this.props.onFailure }
        />
      </div>
    )
  }
}
