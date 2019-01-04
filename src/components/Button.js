import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  border-radius: 9px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 2rem;
  background: ${({ color }) => color};
  color: white;
  border: 2px solid white;
`

export default Button
