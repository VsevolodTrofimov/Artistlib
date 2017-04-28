import filterSet from '@/actionFactories/filterSet'

function filterReducer(state, action) {
  switch (action.type) {
    case filterSet.type:
      let newState = Object.assign({}, state)

      newState.filters = {
        includedTags: action.includedTags,
        excludedTags: action.excludedTags
      }

      return newState

    default:
      return state
  }
}

export default filterReducer
