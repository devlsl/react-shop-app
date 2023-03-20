import { useEffect, useState } from 'react'
import { Order } from '../components/Order/Order'
import { ColBox } from '../components/UI/ColBox'
import { OrderContext } from '../context/OrderContext'
import { useAuth } from '../hooks/useAuth'
import { getOrders } from '../serverMethods/getOrders'

export function Orderspage() {
  const [orders, setOrders] = useState([])
  const { user } = useAuth()

  useEffect(() => {
    getOrders(user).then(setOrders)
  }, [])

  return (
    <ColBox width="100%" gap="40px" padding="40px 100px">
      {orders.map((order) => (
        <OrderContext.Provider key={order.id} value={order}>
          <Order />
        </OrderContext.Provider>
      ))}
    </ColBox>
  )
}
