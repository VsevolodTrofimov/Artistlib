import userAuth from '@/actionFactories/userAuth'

function userReducer(state, action) {
  switch (action.type) {
    case userAuth.type:
      let newState = Object.assign({}, state)

      newState.authToken = action.token
      return newState
    default:
      return state
  }
}

export default userReducer
