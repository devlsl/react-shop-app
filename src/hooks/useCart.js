import { useState } from 'react'

export function useCart() {
  const [isOpen, setOpen] = useState(false)
  const openCart = () => setOpen(true)
  const closeCart = () => setOpen(false)

  return {
    isOpen,
    setOpen,
    openCart,
    closeCart
  }
}
