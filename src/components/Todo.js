import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ text, complete, onClickText, onClickRemove }) => (
  <li>
    <span
      style={{ textDecoration: complete ? 'line-through' : 'none' }}
      onClick={onClickText}
    >
      {text}
    </span>

    <span onClick={onClickRemove}> -</span>
  </li>
)

Todo.propTypes = {
  onClickText: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  complete: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
