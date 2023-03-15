import styled from 'styled-components'
import { cssJustify } from '../../utils/utils'

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => cssJustify(props.justify)};
  align-items: ${(props) => props.align || 'center'};
  gap: ${(props) => props.gap || ''};
  height: ${(props) => props.height || ''};
  width: ${(props) => props.width || ''};
  padding: ${(props) => props.padding || ''};
  margin: ${(props) => props.margin || ''};
`
