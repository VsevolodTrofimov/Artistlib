import React from 'react'

import Artist from '~/UI/components/artist/artist'

import MenuContainer from '~/UI/components/menu/MenuContainer.js'
import ArtistAddContainer from '~/UI/components/artistAdd/artistAddContainer.js'

import FilterContainer from './filter/filterContainer'

export default class ArtistList extends React.Component {
  render() {
    let artistList = this.props.artists.map((artist, idx) => {
      return (
        <Artist
          id  = {artist.id}
          key  = {artist.id}
          name = {artist.name}
          url = {artist.url}
          tags = {artist.tags}
          tagAdder = {this.props.tagAdder}
          tagRemover = {this.props.tagRemover}

          artistRemover = {this.props.artistRemover}
        />)
    })

    return (
      <div>
      <MenuContainer>
        <ArtistAddContainer />
      </MenuContainer>
      <FilterContainer />
      <div className='artistList'>
        {artistList}
      </div>
      </div>
    )
  }
}
