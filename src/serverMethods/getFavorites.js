import { getUser } from './getUser'

export async function getCart(userId) {
  const user = await getUser(userID)
  return user.favorites
}
