import { useState } from 'react'
import { removeDuplicates } from '../utils/utils'

export function useFavorites() {
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

  return {
    ids,
    setIds,
    isThereInFavorites,
    addToFavorites,
    removeFromFavorites,
    toggleToFavorite
  }
}
