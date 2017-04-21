import tagAdd from '@/actionFactories/tagAdd'
import tagRemove from '@/actionFactories/tagRemove'

import preciseObjectAssign from '~/utility/preciseObjectAssign'

function tagReducer(state, action) {
  switch (action.type) {
    case tagAdd.type:
      var newState = preciseObjectAssign(state, ['artists', action.artistId, 'tags'])

      console.log('IS:', state)
      console.log('NS:', newState)
      console.log(newState == state)
      console.log(newState.artists == state.artists)

      newState.artists[action.artistId].tags[action.tagType] =
        [... state.artists[action.artistId].tags[action.tagType], action.tagValue]

      return newState


    case tagRemove.type:
      var newState = preciseObjectAssign(
        state,
        ['artists', action.artistId, 'tags', action.tagType])

      var tags = newState.artists[action.artistId].tags[action.tagType]

      tags.splice(tags.indexOf(action.tagValue), 1)

      return newState


    default:
      return state
  }
}

export default tagReducer
