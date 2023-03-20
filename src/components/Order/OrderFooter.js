import { useOrder } from '../../hooks/useOrder'
import { RowBox } from '../UI/RowBox'

export function OrderFooter() {
  const { amount } = useOrder()
  return (
    <RowBox justify="end" gap="10px" style={{ fontSize: '18px' }}>
      <b>Сумма заказа:</b>
      {amount.toLocaleString()} руб.
    </RowBox>
  )
}
