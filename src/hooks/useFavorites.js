import { useState } from 'react'
import { removeDuplicates } from '../utils/utils'

export function useFavorites() {
  const [items, setItems] = useState([])

  const addToFavorites = (item) =>
    setItems((prev) => removeDuplicates([...prev, item]))

  const removeFromFavorites = (item) =>
    setItems((prev) => prev.filter((el) => el !== item))

  const isThereInFavorites = (item) => items.includes(item)

  const toggleToFavorite = (item) => {
    if (isThereInFavorites(item)) {
      removeFromFavorites(item)
    } else {
      addToFavorites(item)
    }
  }

  return {
    items,
    setItems,
    isThereInFavorites,
    addToFavorites,
    removeFromFavorites,
    toggleToFavorite
  }
}
