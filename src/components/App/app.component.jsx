import React, { useEffect, useState } from 'react'
import { get } from 'axios'

import * as SA from './app.style'
import { Welcome } from '../welcome'
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
      <SA.StyledAppWrapper>
        <Menu menu={menu} />
        <SA.StyledRouter>
          <Welcome path="/" />
          <Results path="results" />
          <Register path="register" />
          <Contact path="contact" />
        </SA.StyledRouter>
      </SA.StyledAppWrapper>
    </>
  )
}
export { App }
