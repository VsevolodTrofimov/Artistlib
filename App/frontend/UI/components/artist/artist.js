import React from 'react'

import curry from '@/utility/curry'

import NameBlock from './nameBlock/nameBlock'
import TagRow from '~/UI/components/tagRow/tagRow'

import EditIcon from '~/static/icons/edit.svg'
import RemoveIcon from '~/static/icons/close.svg'

import './artist.css'

export default class Artist extends React.Component {
  render() {
    let tagAdder = curry(this.props.tagAdder)(this.props.id)
    let tagRemover = curry(this.props.tagRemover)(this.props.id)

    return (
      <div className='row artist'>
        <a target="_blank" href={this.props.url} className='artist__url'>
          <NameBlock idx={this.props.id} name={this.props.name} />
        </a>
        <div className='column artist__tags'>
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
        <div className='column artist__actions items-center'>
          <button onClick={()=>this.props.artistRemover(this.props.id)}>
            <RemoveIcon />
          </button>
        </div>
      </div>
    )
  }
}
