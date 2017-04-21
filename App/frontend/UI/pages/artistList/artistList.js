import React from 'react'

import Artist from '~/UI/components/artist/artist'

export default class artistList extends React.Component {
  componentWillReceiveProps() {
    console.log("YEEE PROPS")
  }
  componentWillUpdate() {
    console.log('yEEE UPD')
  }
  render() {
    var artistList = this.props.artists.map((artist, idx) => {
      return (
        <Artist
          idx  = {idx}
          key  = {idx}
          name = {artist.name}
          tags = {artist.tags}
          tagAdder = {this.props.tagAdder}
          tagRemover = {this.props.tagRemover}
        />)
    })

    return (
      <div>
        {artistList}
      </div>
    )
  }
}
