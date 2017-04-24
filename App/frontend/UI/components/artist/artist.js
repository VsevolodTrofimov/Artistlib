import React from 'react'

import curry from '@/utility/curry'

import NameBlock from './nameBlock/nameBlock'
import TagRow from '~/UI/components/tagRow/tagRow'

import './artist.css'

export default class Artist extends React.Component {
  render() {
    let tagAdder = curry(this.props.tagAdder)(this.props.idx)
    let tagRemover = curry(this.props.tagRemover)(this.props.idx)

    return (
      <div className='row artist'>
        <NameBlock idx={this.props.idx} name={this.props.name} />
        <div className='column'>
          <TagRow
            type = 'global'
            tags = {[...this.props.tags.global.values()]}
            tagAdder = {tagAdder}
            tagRemover = {tagRemover} />

          <TagRow
            type = 'personal'
            tags = {[...this.props.tags.personal.values()]}
            tagAdder = {tagAdder}
            tagRemover = {tagRemover} />
        </div>
      </div>
    )
  }
}
