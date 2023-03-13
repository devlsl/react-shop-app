import axios from 'axios'
import { URL } from './API'
import { getFavorites } from './getFavorites'

export async function addToFavorites(userId, itemId) {
  let favorites = await getFavorites(userId)
  favorites.push({ id: itemId })
  await axios.patch(URL + `users/${userId}`, { favorites })
}
