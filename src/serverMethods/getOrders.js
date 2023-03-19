import { getUser } from './getUser'

export async function getOrders(userId) {
  const user = await getUser(userId)
  return user.orders
}
