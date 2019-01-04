import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const RemoveButton = styled.button`
  display: inline-block;
  border-radius: 9px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 2rem;
  background: red;
  color: white;
  border: 2px solid white;
`

const Todo = ({ text, complete, onClickText, onClickRemove }) => (
  <div>
    <span
      style={{ textDecoration: complete ? 'line-through' : 'none' }}
      onClick={onClickText}
    >
      {text}
    </span>

    <RemoveButton onClick={onClickRemove}>-</RemoveButton>
  </div>
)

Todo.propTypes = {
  onClickText: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  complete: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
