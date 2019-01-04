import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Todo from './Todo'
import { removeTodo } from '../actions'

const TodoList = ({ todos, toggleTodo, removeTodo }) =>
  todos.map(todo => (
    <Todo
      key={todo.id}
      {...todo}
      onClickText={() => toggleTodo(todo.id)}
      onClickRemove={() => removeTodo(todo.id)}
    />
  ))

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      complete: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
}

export default TodoList
