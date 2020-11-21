import React from 'react'
import { object } from 'prop-types'

import { EachMenuItem, MenuWrapper } from './menu.style'

const Menu = ({ menu }) =>{
  return (
    <MenuWrapper>{Object.keys(menu).map(menuKey => {
      return (
        <EachMenuItem to={menuKey}>{menu[menuKey].section}</EachMenuItem>
      )
    })}
    </MenuWrapper>
  )
}

Menu.propTypes = {
  menu: object.isRequired
}

export { Menu }
