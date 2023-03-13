import { getUser } from './getUser'

export async function getFavorites(userId) {
  const user = await getUser(userId)
  return user.favorites
}
