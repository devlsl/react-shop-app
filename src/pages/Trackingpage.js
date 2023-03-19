import { useEffect, useState } from 'react'
import { CardWrapper } from '../components/UI/CardWrapper'
import { getOrders } from '../serverMethods/getOrders'
import { ColBox } from '../components/UI/ColBox'
import { useAuth } from '../hooks/useAuth'
import { RowBox } from '../components/UI/RowBox'

export function Trackingpage() {
  const [orders, setOrders] = useState([])
  const { user } = useAuth()

  useEffect(() => {
    getOrders(user).then(setOrders)
  }, [])

  return (
    <ColBox padding="30px" gap="30px">
      {orders.map((order) => (
        <CardWrapper key={order.id}>
          <RowBox justify="center" width="100%">
            {order.amount}
          </RowBox>
        </CardWrapper>
      ))}
    </ColBox>
  )
}
