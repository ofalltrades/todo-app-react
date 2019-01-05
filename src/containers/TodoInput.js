import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Button from '../components/Button'

import { incrementID, addTodo } from '../actions'

const Input = styled.input`
  border-radius: 3px;
  border: 1px solid transparent;
  border-bottom: 1px solid lightgray;
  margin: 0 0 1em;
  height: 2em;
  font-size: 20px;
  width: 35%;
  background: #ffeeda;

  ::placeholder {
    color: lightgray;
  }
`

const handleOnSubmit = ({ event, input, dispatch }) => {
  event.preventDefault()

  if (input.value.trim()) {
    dispatch(incrementID())
    dispatch(addTodo(input.value))
    input.value = ''
  }
}

const TodoInput = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={event => handleOnSubmit({ event, input, dispatch })}>
        <Input placeholder="add todo" ref={node => (input = node)} />
        <Button type="submit" color="limegreen">
          +
        </Button>
      </form>
    </div>
  )
}

export default connect()(TodoInput)
