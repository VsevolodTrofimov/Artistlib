import React from 'react'

import Input from '~/UI/components/input/input'

import AddIcon from '~/static/icons/add.svg'
import RemoveIcon from '~/static/icons/remove.svg'

import './filter.css'

export default class Filter extends React.Component {
  constructor(props) {
    super(props)
    this.filterSet = this.filterSet.bind(this)
  }

  filterSet() {
    this.props.filterSet(
        this.includedTagsInput.state.value,
        this.excludedTagsInput.state.value)
  }

  render() {
    return (
      <div className='row filter'>
        <AddIcon/>
        <Input
          value = {this.props.includedTags}
          placeholder = 'Included tags'
          onKeyPress = {{'Enter': {cb: this.filterSet}}}
          ref={(input) => {this.includedTagsInput = input}}
        />

        <RemoveIcon/>
        <Input
          value = {this.props.excludedTags}
          placeholder='Excluded tags'
          onKeyPress = {{'Enter': {cb: this.filterSet}}}
          ref={(input) => {this.excludedTagsInput = input}}
        />

        <button onClick= {this.filterSet}>
          Filter
        </button>
      </div>
    )
  }
}
