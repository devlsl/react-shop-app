import { useContext } from 'react'
import { FavoritesContext } from '../hoc/FavoriteProvider'

export function useFavorites() {
  return useContext(FavoritesContext)
}
