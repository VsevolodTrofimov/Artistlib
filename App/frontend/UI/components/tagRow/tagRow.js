import React from 'react'

import Tag from '~/UI/components/tag/tag'
import Input from '~/UI/components/input/input'

import './tagRow.css'

export default class TagRow extends React.Component {
  render() {
    let type = this.props.type
    let tagList = this.props.tags.map((name, idx) => {
      return <Tag
        name = {name}
        key = {idx}
        tagRemover = {() => this.props.tagRemover(type, name)} />
    })

    return (
      <div className='tagRow row'>
        {tagList}
        <Input placeholder = '+' onKeyPress = {{
          'Enter': {cb: this.props.tagAdder(type), clear: true}}} />
      </div>
    )
  }
}
