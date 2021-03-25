import React from 'react'
import { render } from 'react-dom'
import './index.scss'

const Application = () => (
  <h1>Hello World</h1>
)

render(<Application />, document.getElementById('root'))