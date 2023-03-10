import { useState } from 'react'
import { removeDuplicates } from '../utils/utils'

export function useCart() {
  const [cartIsOpen, setCartOpen] = useState(false)
  const [purchases, setPurchases] = useState([])
  const openCart = () => setCartOpen(true)
  const closeCart = () => setCartOpen(false)
  const addToCart = (item) =>
    setPurchases((prev) => removeDuplicates([...prev, item]))
  const isThereInCart = (item) => purchases.includes(item)

  return {
    cartIsOpen,
    setCartOpen,
    purchases,
    setPurchases,
    openCart,
    closeCart,
    addToCart,
    isThereInCart
  }
}
