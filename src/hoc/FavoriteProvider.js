import { useState } from 'react'
import { removeDuplicates } from '../utils/utils'
import { createContext } from 'react'

export const FavoritesContext = createContext(null)

export function FavoritesProvider({ children }) {
  const [ids, setIds] = useState([])

  const addToFavorites = (id) =>
    setIds((prev) => removeDuplicates([...prev, id]))

  const removeFromFavorites = (id) =>
    setIds((prev) => prev.filter((el) => el !== id))

  const isThereInFavorites = (id) => ids.includes(id)

  const toggleToFavorite = (id) => {
    if (isThereInFavorites(id)) {
      removeFromFavorites(id)
    } else {
      addToFavorites(id)
    }
  }

  const value = {
    ids,
    setIds,
    addToFavorites,
    removeFromFavorites,
    isThereInFavorites,
    toggleToFavorite
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}
