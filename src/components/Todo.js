import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TodoText from './TodoText'
import Button from './Button'

const Todo = ({ text, complete, onClickText, onClickRemove }) => (
  <div>
    <TodoText onClick={onClickText} {...{ complete }}>
      {text}
    </TodoText>

    <Button onClick={onClickRemove} color="red">
      x
    </Button>
  </div>
)

Todo.propTypes = {
  onClickText: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  complete: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
