import styled from 'styled-components'

export const NavBarItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props.gap || '0px'};
  align-items: center;
`
