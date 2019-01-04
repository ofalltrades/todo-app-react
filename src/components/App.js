import React, { Component } from 'react'

import TodoInput from '../containers/TodoInput'
import Todos from '../containers/Todos'

import '../styles.css'

class App extends Component {
  render() {
    return (
      <div>
        <h1>TODO LIST</h1>
        <TodoInput />
        <Todos />
      </div>
    )
  }
}

export default App
