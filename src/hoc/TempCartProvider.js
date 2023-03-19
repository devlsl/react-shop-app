import { useState } from 'react'
import { createContext } from 'react'

export const TempCartContext = createContext(null)

export function TempCartProvider({ children }) {
  const [tempCartPrice, setTempCartPrice] = useState(0)
  const [tempCart, setTempCart] = useState(null)
  const setItemTempCart = (id, qty, checked) => {
    setTempCart((prev) =>
      prev.map((item) => (item.id === id ? { id, qty, checked } : item))
    )
  }
  const deleteFromTempCart = (id) => {
    setTempCart((prev) => prev.filter((el) => el.id !== id))
  }
  const value = {
    tempCartPrice,
    setTempCartPrice,
    tempCart,
    setTempCart,
    setItemTempCart,
    deleteFromTempCart
  }

  return (
    <TempCartContext.Provider value={value}>
      {children}
    </TempCartContext.Provider>
  )
}
