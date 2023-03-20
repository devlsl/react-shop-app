import { getOrders } from './getOrders'

export async function getOrderById(userId, orderId) {
  const orders = await getOrders(userId)
  return orders.find((order) => order.id === orderId)
}
