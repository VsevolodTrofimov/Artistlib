import React from 'react'

import MenuIcon from '~/static/icons/menu.svg'
import ArrowUpIcon from '~/static/icons/arrowUp.svg'

import './menu.css'

export default class Menu extends React.Component {
  showMenu() {
    if(this.props.isShown) {
      return (
        <div>
          <button className='menu__btn' onClick={this.props.hide}>
            <ArrowUpIcon/>
          </button>
          <div className='menu__content'>
            {this.props.children}
          </div>
        </div>
      )
    } else {
      return ( <button className='menu__btn' onClick={this.props.show}>
        <MenuIcon/>
      </button> )
    }
  }
  render() {

    return (
      <div className='menu'>
        { this.showMenu.call(this) }
      </div>
    )
  }
}
