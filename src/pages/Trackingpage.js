import { useEffect, useState } from 'react'
import { getOrders } from '../serverMethods/getOrders'
import { useAuth } from '../hooks/useAuth'

export function Trackingpage() {
  const [orders, setOrders] = useState([])
  const { user } = useAuth()

  useEffect(() => {
    getOrders(user).then(setOrders)
  }, [])

  return <input type="text" value="dasdas" />
}
