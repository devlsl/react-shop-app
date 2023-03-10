import styled from 'styled-components'

export const RowBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props.gap || '0px'};
  align-items: center;

  img {
    width: 20px;
    height: 20px;
  }
`
