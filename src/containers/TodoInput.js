import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { addTodo } from '../actions'

const AddButton = styled.button`
  display: inline-block;
  border-radius: 9px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 2rem;
  background: limegreen;
  color: white;
  border: 2px solid white;
`

const Input = styled.input`
  border-radius: 3px;
  border: 1px solid transparent;
  border-bottom: 1px solid limegreen;
  margin: 0 0 1em;
  height: 2em;
  font-size: 20px;
  width: 35%;

  ::placeholder {
    color: lightgray;
  }
`

const TodoInput = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <Input placeholder="add todo" ref={node => (input = node)} />
        <AddButton type="submit">+</AddButton>
      </form>
    </div>
  )
}

export default connect()(TodoInput)
