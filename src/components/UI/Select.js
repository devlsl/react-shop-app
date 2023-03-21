import styled from 'styled-components'

export const Select = styled.select`
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  padding: ${(props) => props.padding || '4px'};
  width: ${(props) => props.width || ''};
  height: ${(props) => props.height || '30px'};
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  ::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`
