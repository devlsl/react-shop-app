import { useContext } from 'react'
import { OrderContext } from '../context/OrderContext'

export function useOrder() {
  return useContext(OrderContext)
}
