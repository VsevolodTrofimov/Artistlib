import appInit from '@/actionFactories/appInit'

function appReducer(state, action) {
  switch (action.type) {
    case appInit.type:
      let newState = Object.assign({}, state)

      newState.artists = action.artists

      newState.artists.forEach(function (artist) {
        for(let key in artist.tags) {
          artist.tags[key] = new Set(artist.tags[key])
        }
      })

      console.log(newState === state, newState.artists === state.artists)

      return newState

    default:
      return state
  }
}

export default appReducer
