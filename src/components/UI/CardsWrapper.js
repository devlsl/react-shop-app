import styled from 'styled-components'

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: ${(props) => props.padding || '60px 40px'};
  row-gap: 60px;
  justify-content: space-between;
  align-items: flex-start;
`
