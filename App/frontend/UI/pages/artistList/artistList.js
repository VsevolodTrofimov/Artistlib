import React from 'react'

import Artist from '~/UI/components/artist/artist'
import FilterContainer from './filter/FilterContainer'

export default class ArtistList extends React.Component {
  render() {
    let artistList = this.props.artists.map((artist, idx) => {
      return (
        <Artist
          idx  = {artist.id}
          key  = {artist.id}
          name = {artist.name}
          tags = {artist.tags}
          tagAdder = {this.props.tagAdder}
          tagRemover = {this.props.tagRemover}
        />)
    })

    return (
      <div>
        <FilterContainer />
        {artistList}
      </div>
    )
  }
}
