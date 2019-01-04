const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

let todoID = 0

export const addTodo = text => ({
  type: ADD_TODO,
  id: todoID++,
  text
})

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})
