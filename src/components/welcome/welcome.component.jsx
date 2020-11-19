import React, { useEffect, useState } from 'react'
import { get } from 'axios'
import { EachMenuItem, MenuWrapper, StyledLogo } from './welcome.style'
import GitHubIcon from '@material-ui/icons/GitHub'

const Welcome = () => {
  const[welcome, updateWelcome] = useState ({})

  useEffect(
    () => {
      const getResult = async() => {
        const { data } = await get("http://localhost:1234/welcome")
        updateWelcome(data)
      }
      getResult()
    },
    []
  )
  
  const {
    menu =[]
  }= welcome

  return (
    <>
      <StyledLogo>
        <GitHubIcon
        fontSize="large"/>
        React and Redux Fun
      </StyledLogo>
      <MenuWrapper>{menu.map( menuItem => {
        return(
          <EachMenuItem>{menuItem}</EachMenuItem>
        )
      })}
      </MenuWrapper>
    </>
    )
}
export { Welcome }