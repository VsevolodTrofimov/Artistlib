import React from 'react'
import gradientToStyle from '~/utility/gradientToStyle'

export default class NameBlock extends React.Component {
  render() {
    let styles = gradientToStyle(this.props.idx)
    let textStyles = {}

    if(this.props.name.length > 12) {
      textStyles.fontSize = 'var(--font-l)'
    }

    let el = (
      <div className='column artist__card items-center' style={styles}>
        <h2 className='artist__card__name' style={textStyles}>
          {this.props.name}
        </h2>
      </div>
    )

    return el
  }
}
