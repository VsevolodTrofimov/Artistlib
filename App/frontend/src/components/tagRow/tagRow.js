import React from 'react'
import Tag from './tag/tag'
import './tagRow.css'

export default class TagRow extends React.Component {
  render() {
    let tagList = this.props.tags.map((name, idx) => {
      return <Tag name={name} key={idx} />
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
