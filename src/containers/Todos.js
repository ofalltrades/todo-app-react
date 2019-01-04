import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TodoList from '../components/TodoList'

import { toggleTodo, removeTodo } from '../actions'

class Todos extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        complete: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
  }

  render() {
    const { todos, toggleTodo, removeTodo } = this.props
    return <TodoList {...{ todos, toggleTodo, removeTodo }} />
  }
}

const mapStateToProps = ({ todos }) => ({ todos })

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  removeTodo: id => dispatch(removeTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
