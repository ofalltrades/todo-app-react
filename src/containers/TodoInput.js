import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Button from '../components/Button'

import { addTodo } from '../actions'

const Input = styled.input`
  border-radius: 3px;
  border: 1px solid transparent;
  border-bottom: 1px solid lightgray;
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
        <Button type="submit" color="limegreen">
          +
        </Button>
      </form>
    </div>
  )
}

export default connect()(TodoInput)
