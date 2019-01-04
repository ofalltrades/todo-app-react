import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TodoList from '../components/TodoList'

import { toggleTodo, removeTodo } from '../actions'

const mapStateToProps = ({ todos }) => ({ todos })

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  removeTodo: id => dispatch(removeTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
