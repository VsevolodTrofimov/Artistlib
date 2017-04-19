import React from 'react'
import Tag from './tag/tag'
import './tagRow.css'

export default class TagRow extends React.Component {
  render() {
    let tagList = this.props.tags.map((name) => {
      return <Tag name={name} />
    })

    return (
      <div className='tagRow row'>
        {tagList}
        <button>
          +
        </button>
      </div>
    )
  }
}
