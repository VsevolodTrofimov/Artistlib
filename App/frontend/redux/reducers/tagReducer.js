import tagAdd from '@/actionFactories/tagAdd'
import tagRemove from '@/actionFactories/tagRemove'

import preciseObjectAssign from '~/utility/preciseObjectAssign'

function getArtistById(artists, id) {
    console.log(id, artists)
  for(let i = 0; i < artists.length; i++) {
    if(artists[i].id === id) return {
      key: i,
      artist: artists[i]
    }
  }

  console.log('not found')
}

function tagReducer(state, action) {
  let newState = state
  let key = 0

  switch (action.type) {
    case tagAdd.type:
      key = getArtistById(state.artists, action.artistId).key
      newState = preciseObjectAssign(state, ['artists', key, 'tags'])

      console.log(key, newState.artists[key])
      newState.artists[key].tags[action.tagType] =
        [... state.artists[key].tags[action.tagType], action.tagValue]

      return newState


    case tagRemove.type:
      key = getArtistById(state.artists, action.artistId).key
      newState = preciseObjectAssign(state, ['artists', key, 'tags', action.tagType])

      let tags = newState.artists[key].tags[action.tagType]

      tags.splice(tags.indexOf(action.tagValue), 1)

      return newState


    default:
      return state
  }
}

export default tagReducer
