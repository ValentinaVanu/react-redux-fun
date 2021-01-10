import React from 'react'
import { object } from 'prop-types'
// import GitHubIcon from '@material-ui/icons/GitHub'

import * as SM from './menu.style'

const Menu = ({ menu }) =>{
  return (
    <>
      <SM.StyledLogo>
        {/* <GitHubIcon fontSize="large" /> */}
        <span>React and Redux Fun</span>
      </SM.StyledLogo>
      <SM.MenuWrapper>{Object.keys(menu).map(menuKey => {
        return (
          <SM.EachMenuItem key={menuKey} to={menuKey}>{menu[menuKey].section}</SM.EachMenuItem>
        )
      })}
      </SM.MenuWrapper>
    </>
  )
}

Menu.propTypes = {
  menu: object.isRequired
}

export { Menu }
