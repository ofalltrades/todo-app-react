import store from './store'

import { INCREMENT_ID, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actionTypes'

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
