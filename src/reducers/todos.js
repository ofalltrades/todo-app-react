const todos = (state = [], { type, id, text }) => {
  switch (type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id,
          text,
          complete: false
        }
      ]

    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== id)

    default:
      return state
  }
}

export default todos
