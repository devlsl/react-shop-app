import { getOrders } from './getOrders'

export async function isThereOrderByTrack(userId, track) {
  const orders = await getOrders(userId)
  const isThereOrder = orders.find((order) => order.track === track)
  return isThereOrder ? true : false
}
