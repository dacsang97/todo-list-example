import { render } from 'react-dom'
import React from 'react'

const appContainer = document.getElementById('app')

const App = () => <h1>Hello World</h1>

render(<App />, appContainer)
