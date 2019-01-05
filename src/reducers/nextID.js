const nextID = (state = 0, { type }) => {
  if (type === 'INCREMENT_ID') return state + 1
  return state
}

export default nextID
