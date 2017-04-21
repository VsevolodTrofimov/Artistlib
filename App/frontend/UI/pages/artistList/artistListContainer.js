import { connect } from 'react-redux'

import tagAdd from '@/actionFactories/tagAdd'
import tagRemove from '@/actionFactories/tagRemove'

import ArtistList from './artistList'


function mapStateToProps(state) {
  console.log("ST", state)
  return {
    artists: state.artists
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
