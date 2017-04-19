import React from 'react'

export default class Tag extends React.Component {
  render() {
    return (
      <div className='tag row'>
        <div className='tag__name'>
          {this.props.name}
        </div>
        <button className='tag__delete'>
          x
        </button>
      </div>
    )
  }
}
