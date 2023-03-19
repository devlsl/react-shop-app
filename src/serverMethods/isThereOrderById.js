import { getOrders } from './getOrders'

export async function isThereOrderById(userId, orderId) {
  const orders = await getOrders(userId)
  const isThereOrder = orders.find((order) => order.id === orderId)
  return isThereOrder ? true : false
}
