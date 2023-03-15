import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { RowBox } from '../UI/RowBox'

const StyledLink = styled.span`
  a {
    font-weight: 400;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);

    &.active,
    :hover {
      color: rgba(0, 0, 0, 0.85);
    }
  }
`

export function CustomLink({ children, to, ...props }) {
  return (
    <StyledLink>
      <NavLink to={to} {...props}>
        <RowBox gap="4px">{children}</RowBox>
      </NavLink>
    </StyledLink>
  )
}
