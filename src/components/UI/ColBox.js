import styled from 'styled-components'

export const ColBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${(props) => props.gap || '0px'};
  align-items: center;
`
