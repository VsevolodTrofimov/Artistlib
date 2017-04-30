import { connect } from 'react-redux'

import Menu from './menu'

function mapStateToProps(state) {
  return {
    isShown: state.menuShown
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hide: () => {
      dispatch({type: 'MENU_HIDE'})
    },
    show: () => {
      dispatch({type: 'MENU_SHOW'})
    }
  }
}

const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (Menu)

export default MenuContainer
