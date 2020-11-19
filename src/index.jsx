import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App/app.component'

const root = document.querySelector('#root')

const app = <App />

render(app, root)
