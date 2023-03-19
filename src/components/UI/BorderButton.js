import styled, { css } from 'styled-components'

const StyledBorderButton = styled.button.attrs({ type: 'button' })`
  border: 2px solid rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;

  :active {
    border-color: rgba(0, 0, 0, 0.1);
  }

  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        background-color: rgba(0, 0, 0, 0.06);
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      color: rgba(0, 0, 0, 0.2);
    `}
`

export function BorderButton({ children, ...props }) {
  return <StyledBorderButton {...props}>{children}</StyledBorderButton>
}
