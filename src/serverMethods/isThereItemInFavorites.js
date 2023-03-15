import { getFavorites } from './getFavorites'

export async function isThereItemInFavorites(userId, itemId) {
  const favorites = await getFavorites(userId)
  const isThereItem = favorites.find((item) => item.id === itemId)
  return isThereItem ? true : false
}
