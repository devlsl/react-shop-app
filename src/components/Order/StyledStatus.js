import styled, { css } from 'styled-components'

export const StyledStatus = styled.div`
  padding: 5px 10px;
  border-radius: 50px;
  color: #ffc300;
  border: 2px solid #ffc300;
  font-weight: 500;
  cursor: default;

  ${({ status }) =>
    (status === 'в обработке' &&
      css`
        color: #ffc300;
        border-color: #ffc300;
      `) ||
    (status === 'обработан' &&
      css`
        color: #d696bb;
        border-color: #d696bb;
      `) ||
    (status === 'в пути' &&
      css`
        color: #0084ff;
        border-color: #0084ff;
      `) ||
    (status === 'доставлен' &&
      css`
        color: #44bec7;
        border-color: #44bec7;
      `) ||
    (status === 'получен' &&
      css`
        color: #60a16b;
        border-color: #60a16b;
      `) ||
    (status === 'отклонён' &&
      css`
        color: #fa3c4c;
        border-color: #fa3c4c;
      `)}
`
