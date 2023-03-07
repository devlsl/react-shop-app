import styled from 'styled-components'

const StyledButton = styled.button`
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;

  &:hover {
    background-color: #e6e6e6;
  }
`

export function Button({ Icon }) {
  return <StyledButton>{Icon}</StyledButton>
}
