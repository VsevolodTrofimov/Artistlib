import React from 'react'
import Artist from './components/artist/artist'

export default class App extends React.Component {
  render() {
    let artistList = this.props.artists.map((artist, idx) => {
      return <Artist
        idx  = {Math.floor(idx*Math.random() * 100)}
        name = {artist.name}
        tags = {artist.tags}
        key  = {idx} />
    })

    return (
      <div>
        {artistList}
      </div>
    )
  }
}
