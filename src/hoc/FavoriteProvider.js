import { useState } from 'react'
import { removeDuplicates } from '../utils/utils'
import { createContext } from 'react'

export const FavoritesContext = createContext(null)

export function FavoritesProvider({ children }) {
  const [favoritesChangeTrigger, setFavoritesChangeTrigger] = useState()
  const favoritesHasChanged = () => setFavoritesChangeTrigger((prev) => !prev)

  const value = {
    favoritesChangeTrigger,
    setFavoritesChangeTrigger,
    favoritesHasChanged
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}
