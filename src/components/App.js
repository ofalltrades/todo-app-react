import React, { Component } from 'react'
import styled from 'styled-components'

import TodoInput from '../containers/TodoInput'
import Todos from '../containers/Todos'
import Header from './Header'

const Container = styled.div`
  padding: 1rem;
`

const App = () => (
  <Container>
    <Header />
    <TodoInput />
    <Todos />
  </Container>
)

export default App
