import React from 'react'
import gradientToStyle from '~/utility/gradientToStyle'

export default class NameBlock extends React.Component {
  render() {
    let styles = gradientToStyle(this.props.idx)
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

    //        <div className='artist__card__underline' style={styles}></div>

    return el
  }
}
