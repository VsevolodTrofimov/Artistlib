import artistAdd from '@/actionFactories/artistAdd'
import artistRemove from '@/actionFactories/artistRemove'

import preciseObjectAssign from '~/utility/preciseObjectAssign'
import getItemById from '~/utility/getItemById'

function artistReducer(state, action) {
  let newState;
  switch (action.type) {
    case artistAdd.type:
      newState = preciseObjectAssign(state, ['artists'])

      newState.artists.push({
        id: action.id,
        name: action.name,
        url: action.url,
        tags: {
          global: new Set(),
          personal: new Set()
        }
      })
      return newState


    case artistRemove.type:
      newState = preciseObjectAssign(state, ['artists'])
      let key = getItemById(newState.artists, action.id).key

      newState.artists.splice(key, 1)
      return newState


    default:
      return state
  }
}

export default artistReducer
