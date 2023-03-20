import { getOrders } from './getOrders'

export async function getOrderByTrack(userId, track) {
  const orders = await getOrders(userId)
  return orders.find((order) => order.track === track)
}
