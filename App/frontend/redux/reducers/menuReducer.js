function menuReducer(state, action) {
  let newState;
  switch (action.type) {
    case 'MENU_SHOW':
       newState = Object.assign({}, state)

      newState.menuShown = true
      return newState


    case 'MENU_HIDE':
      newState = Object.assign({}, state)

      newState.menuShown = false
      return newState


    default:
      return state
  }
}

export default menuReducer
