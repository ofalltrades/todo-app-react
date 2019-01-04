import styled, { css } from 'styled-components'

const TodoText = styled.div`
  display: inline-block;
  width: 26rem;
  font-size: 18px;

  ${({ complete }) =>
    complete &&
    css`
      text-decoration: line-through;
    `}
`

export default TodoText
