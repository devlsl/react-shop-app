import styled from 'styled-components'

export const Button = styled.button`
  background: rgba(0, 0, 0, 0.2);
  color: white;
  border-radius: 5px;
  padding: 10px;
  font-weight: 500;

  :hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  :active {
    background-color: rgba(0, 0, 0, 0.5);
    position: relative;
    top: 1px;
  }
`
