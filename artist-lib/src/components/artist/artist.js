import React from 'react'
import NameBlock from './nameBlock/nameBlock'
import TagRow from '../tagRow/tagRow'
import './artist.css'

export default class App extends React.Component {
  render() {
    return (
      <div className='row artist'>
        <NameBlock idx={this.props.idx} name={this.props.name} />
        <div className='column'>
          <TagRow tags={this.props.tags.global} />
          <TagRow tags={this.props.tags.personal} />
        </div>
      </div>
    )
  }
}
