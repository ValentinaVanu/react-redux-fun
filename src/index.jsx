import React from 'react'
import { render } from 'react-dom'
import { App } from './components/app'
import './index.css'

const root = document.querySelector('#root')

const app = <App />

render(app, root)
