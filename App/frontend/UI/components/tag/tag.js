import React from 'react'

import './tag.css'

export default class Tag extends React.Component {
  render() {
    return (
      <div className='tag row'>
        <div className='tag__name'>
          {this.props.name}
        </div>
        <button className='tag__delete' onClick={this.props.tagRemover}>
          x
        </button>
      </div>
    )
  }
}
