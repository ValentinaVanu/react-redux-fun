import React, { useEffect, useState } from 'react'
import { get } from 'axios'
import { Router } from '@reach/router'

import { Welcome } from '../welcome'
import { StyledAppWrapper } from './app.style'
import { Menu } from '../menu'
import { Results } from '../results'
import { Register } from '../register'
import { Contact } from '../contact'

const App = () => {
  const [app, updateApp] = useState({ menu: {} })

  useEffect(
    () => {
      const getResult = async () => {
        const { data } = await get("http://localhost:1234/app")
        updateApp(data)
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
      <StyledAppWrapper>
        <Menu menu={menu} />
        <Router>
          <Welcome path="/" />
          <Results path="results" />
          <Register path="register" />
          <Contact path="contact" />
        </Router>
      </StyledAppWrapper>
    </>
  )
}
export { App }
