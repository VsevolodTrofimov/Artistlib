import React from 'react'

import './input.css'

export default class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    if(this.props.onChange) this.props.onChange(event)
  }

  handleKeyPress(event, key, cb, reset) {
    let value = event.target.value

    for(let key in this.props.onKeyPress) {
      if(event.key === key) {
        this.props.onKeyPress[key].cb(value)
        if(this.props.onKeyPress[key].clear) {
          this.setState({value: ''})
        }
      }
    }
  }

  render() {
    return (
      <div className='input'>
        <input
          type = {this.props.type}
          value = {this.state.value}
          placeholder = {this.props.placeholder}
          className = {this.props.className}
          onChange = {this.handleChange}
          onKeyPress = {this.handleKeyPress}
          />
      </div>
    )
  }
}
