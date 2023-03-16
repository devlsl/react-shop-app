import styled, { css } from 'styled-components'

const StyledBorderButton = styled.button`
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;

  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        background-color: #e6e6e6;
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
