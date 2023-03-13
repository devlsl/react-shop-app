import { addToFavorites } from './addToFavorites'
import { deleteFromFavorites } from './deleteFromFavorites'
import { isThereItemInFavorites } from './isThereItemInFavorites'

export async function toggleToFavorites(userId, itemId) {
  if (await isThereItemInFavorites(userId, itemId)) {
    await deleteFromFavorites(userId, itemId)
  } else {
    await addToFavorites(userId, itemId)
  }
}
