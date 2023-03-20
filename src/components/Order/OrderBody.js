import { ColBox } from '../UI/ColBox'
import { OrderItem } from './OrderItem'
import { useOrder } from '../../hooks/useOrder'

export function OrderBody() {
  const { items } = useOrder()

  return (
    <ColBox gap="10px" width="100%">
      {items.map((item) => (
        <OrderItem key={item.id} item={item} />
      ))}
    </ColBox>
  )
}
