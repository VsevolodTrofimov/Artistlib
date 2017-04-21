import defaultState from './defaultState'

export default function initReducer(state = defaultState, action) {
  if(action.type === 'APP_INIT') {
    return defaultState
  }

  return state
}
