import { useEffect, useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [isOpen, setOpen] = useState(false)
  const [cartChangeTrigger, setCartChangeTrigger] = useState()
  const cartHasChanged = () => setCartChangeTrigger((prev) => !prev)
  const openCart = () => setOpen(true)
  const closeCart = () => setOpen(false)

  const value = {
    isOpen,
    setOpen,
    openCart,
    closeCart,
    cartChangeTrigger,
    cartHasChanged
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
