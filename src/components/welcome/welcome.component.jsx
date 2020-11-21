import React, { useEffect, useState } from 'react'
import { get } from 'axios'
import { EachMenuItem, MenuWrapper, StyledLogo } from './welcome.style'
import GitHubIcon from '@material-ui/icons/GitHub'

const Welcome = () => {
  const [app, updat] = useState({ menu: {} })

  useEffect(
    () => {
      const getResult = async () => {
        const { data } = await get("http://localhost:1234/app")
        updat(data)
      }
      getResult()
    },
    []
  )

  const {
    menu
  } = app

  return (
    <>
      <StyledLogo>
        <GitHubIcon fontSize="large" />
        <span>React and Redux Fun</span>
      </StyledLogo>
    </>
  )
}
export { Welcome }