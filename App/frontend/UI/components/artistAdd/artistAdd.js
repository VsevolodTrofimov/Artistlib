import React from 'react'

import Input from '~/UI/components/input/input'

import PersonIcon from '~/static/icons/person.svg'
import LinkIcon from '~/static/icons/link.svg'

export default class ArtistAdd extends React.Component {
  constructor(props) {
    super(props)
    this.artistAdd = this.artistAdd.bind(this)
  }

  artistAdd() {
    this.props.artistRequest(
        this.artistName.state.value,
        this.artistLink.state.value)
  }

  render() {
    return (
      <div className='row inputRow artistAdd'>
        <div className='row'>
          <PersonIcon/>
          <Input
            placeholder = "Artist's name"
            onKeyPress = {{'Enter': {cb: this.artistAdd}}}
            ref={(input) => {this.artistName = input}}
          />
        </div>

        <div className='row'>
          <LinkIcon/>
          <Input
            placeholder='Danbooru tag'
            onKeyPress = {{'Enter': {cb: this.artistAdd}}}
            ref={(input) => {this.artistLink = input}}
          />
        </div>
        <div className='row'>
          <button onClick= {this.artistAdd}>
            Add Artist
          </button>
        </div>
      </div>
    )
  }
}
