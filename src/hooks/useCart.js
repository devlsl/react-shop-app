import { useContext } from 'react'
import { CartContext } from '../hoc/CartProvider'

export function useCart() {
  return useContext(CartContext)
}
