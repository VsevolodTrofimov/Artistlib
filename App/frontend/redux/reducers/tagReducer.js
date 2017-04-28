import tagAdd from '@/actionFactories/tagAdd'
import tagRemove from '@/actionFactories/tagRemove'

import preciseObjectAssign from '~/utility/preciseObjectAssign'
import getItemById from '~/utility/getItemById'

function tagReducer(state, action) {
  let newState = state
  let key = 0

  switch (action.type) {
    case tagAdd.type:
      key = getItemById(state.artists, action.artistId).key
      newState = preciseObjectAssign(state, ['artists', key, 'tags', action.tagType])

      newState.artists[key].tags[action.tagType].add(action.tagValue)

      return newState


    case tagRemove.type:
      key = getItemById(state.artists, action.artistId).key
      newState = preciseObjectAssign(state, ['artists', key, 'tags', action.tagType])

      newState.artists[key].tags[action.tagType].delete(action.tagValue)

      return newState


    default:
      return state
  }
}

export default tagReducer
