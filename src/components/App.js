import React, { Component } from 'react'

import TodoInput from '../containers/TodoInput'
import Todos from '../containers/Todos'

class App extends Component {
  render() {
    return (
      <div>
        <h1>TODO NOTEPAD</h1>
        <TodoInput />
        <Todos />
      </div>
    )
  }
}

export default App
