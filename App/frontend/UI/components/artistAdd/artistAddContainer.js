import { connect } from 'react-redux'

import artistRequest from '@/actionFactories/artistRequest'

import ArtistAdd from './artistAdd'


function mapStateToProps(state) {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    artistRequest: (name, url) => {
      dispatch(artistRequest.factory(name, url))
    },
  }
}

const ArtistAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (ArtistAdd)

export default ArtistAddContainer
