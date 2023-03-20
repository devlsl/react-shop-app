import styled from 'styled-components'
import { useOrder } from '../../hooks/useOrder'
import { OrderBody } from './OrderBody'
import { OrderFooter } from './OrderFooter'
import { OrderHeader } from './OrderHeader'

const StyledOrder = styled.div`
  padding: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 10px 0px;
  gap: 30px;
`

export function Order() {
  const order = useOrder()

  return (
    <StyledOrder>
      <OrderHeader />
      <OrderBody />
      <OrderFooter />
    </StyledOrder>
  )
}
