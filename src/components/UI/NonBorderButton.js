import styled, { css } from 'styled-components'

export const NonBorderButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  padding: 0;

  color: rgba(0, 0, 0, 0.7);
  font-size: 16px;

  :hover {
    color: rgba(0, 0, 0, 0.9);
  }
`
