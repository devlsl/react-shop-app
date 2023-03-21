import { useEffect, useState } from 'react'
import { getOrders } from '../serverMethods/getOrders'
import { useAuth } from '../hooks/useAuth'
import { Input } from '../components/UI/Input'
import { getOrderByTrack } from '../serverMethods/getOrderByTrack'
import { ColBox } from '../components/UI/ColBox'
import { isThereOrderByTrack } from '../serverMethods/isThereOrderByTrack'
import { OrderItem } from '../components/Order/OrderItem'
import { OrderContext } from '../context/OrderContext'
import { Order } from '../components/Order/Order'
import { RowBox } from '../components/UI/RowBox'
import { Modal } from '../components/UI/Modal'

export function Trackingpage() {
  const [order, setOrder] = useState(null)
  const [isThereOrder, setIsThereOrder] = useState(false)
  const [track, setTrack] = useState('')
  const { user } = useAuth()

  useEffect(() => {
    setOrder(null)
    setIsThereOrder(false)
    if (track) {
      async function checkOrder() {
        const isThere = await isThereOrderByTrack(user, track)
        if (isThere) {
          setIsThereOrder(true)
        }
      }
      checkOrder()
    }
  }, [track])
  console.log(isThereOrder)

  useEffect(() => {
    if (isThereOrder) {
      getOrderByTrack(user, track).then(setOrder)
    }
  }, [isThereOrder])
  console.log(!!order)

  const onChangeTrack = (e) => setTrack(e.target.value)

  return (
    <ColBox gap="35px" padding="35px 50px">
      <RowBox
        align="start"
        width="100%"
        style={{
          fontSize: '25px',
          fontWeight: '700',
          color: 'rgba(239, 85, 64, 0.7)'
        }}
      >
        Отслеживание заказа
      </RowBox>
      <ColBox gap="35px">
        <Input
          width="150px"
          placeholder="Номер заказа"
          type="text"
          onChange={onChangeTrack}
          value={track}
        />
        {order && (
          <OrderContext.Provider value={order}>
            <Order />
          </OrderContext.Provider>
        )}
      </ColBox>
    </ColBox>
  )
}
