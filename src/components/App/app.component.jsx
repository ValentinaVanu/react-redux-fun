import React, { useEffect, useState } from 'react'
import { get } from 'axios'
import { Provider } from 'react-redux'
import store from '../../store'

import * as SA from './app.style'
import { Welcome } from '../welcome'
import { Menu } from '../menu'
import { Results } from '../results'
import { Register } from '../register'
import { Contact } from '../contact'
import { Chat } from '../chat/chat.component'

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
    <Provider store={store}>
      <SA.StyledAppWrapper>
        <Menu menu={menu} />
        <SA.StyledRouter>
          <Welcome path="/" />
          <Results path="results" />
          <Register path="register" />
          <Contact path="contact" />
          <Chat path="chat"/>
        </SA.StyledRouter>
      </SA.StyledAppWrapper>
    </Provider>
  )
}
export { App }
