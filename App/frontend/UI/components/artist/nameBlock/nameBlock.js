import React from 'react'

export default class NameBlock extends React.Component {
  render() {
    let textStyles = {}

    if(this.props.name.length > 11) {
      textStyles.fontSize = 'var(--font-l)'
    }

    let el = (
      <div className='column items-center artist__card'>
        <h2 className='artist__card__name' style={textStyles}>
          {this.props.name}
        </h2>
      </div>
    )

    return el
  }
}
