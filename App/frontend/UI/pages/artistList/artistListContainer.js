import { connect } from 'react-redux'

import tagAdd from '@/actionFactories/tagAdd'
import tagRemove from '@/actionFactories/tagRemove'

import ArtistList from './artistList'

function getVisibleArtists(artists, includedTags, excludedTags) {
  console.log(arguments)
  function checkForIncluded(tags) {
    let found = 0

    includedTags.forEach(function(tag) {
      if(tags.indexOf(tag) + 1) found++
    })

    return found === includedTags.length
  }

  function checkForExcluded(tags) {
    let isOk = true
    excludedTags.forEach(function(tag) {
      if(tags.indexOf(tag) + 1) isOk = false
    })

    return isOk
  }

  return artists.filter(function(artist) {
    return ((checkForIncluded(artist.tags.global) || checkForIncluded(artist.tags.personal))
            && checkForExcluded(artist.tags.global)
            && checkForExcluded(artist.tags.personal))
  })
}

function mapStateToProps(state) {
  return {
    artists: getVisibleArtists(state.artists,
      state.filters.includedTags, state.filters.excludedTags)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tagAdder: (artistId, tagType, tagValue) => {
      dispatch(tagAdd.factory(artistId, tagType, tagValue))
    },
    tagRemover: (artistId, tagType, tagValue) => {
      dispatch(tagRemove.factory(artistId, tagType, tagValue))
    }
  }
}

const ArtistListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (ArtistList)

export default ArtistListContainer
