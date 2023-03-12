import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [isOpen, setOpen] = useState(false)
  const openCart = () => setOpen(true)
  const closeCart = () => setOpen(false)

  const value = { isOpen, setOpen, openCart, closeCart }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
