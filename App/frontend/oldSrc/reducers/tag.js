import addTag from '@/actionFactories/addTag'
import removeTag from '@/actionFactories/addTag'

import defaultState from './defaultState'

export default function tagReducer(state = defaultState, action) {
  switch (action.type) {
    case addTag.type:
      var newState = Object.assign({}, state)

      var artistTags = newState[options.artistId].tags
      var typedTags = artistTags[options.tagType]

      artistTags[options.tagType] = typedTags.splice(typedTags.indexOf(options.tagValue), 1)

      return newState
    default:
      return state
  }
}
