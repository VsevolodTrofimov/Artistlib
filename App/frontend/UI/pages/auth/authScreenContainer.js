import { connect } from 'react-redux'

import userAuth from '@/actionFactories/userAuth'

import AuthScreen from './AuthScreen'

function mapStateToProps(state) {
  return {
    clientId: state.clientId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSuccess: (event) => {
      dispatch(userAuth.factory(event))
    },
    onFailure: (event) => {
      console.error(event.error, event);
    }
  }
}

const AuthScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (AuthScreen)

export default AuthScreenContainer
