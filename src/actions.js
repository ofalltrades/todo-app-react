import store from './store'

const INCREMENT_ID = 'INCREMENT_ID'
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

export const incrementID = () => ({ type: INCREMENT_ID })

export const addTodo = text => ({
  type: ADD_TODO,
  id: store.getState().nextID,
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
