import { getOrders } from './getOrders'

export async function getOrderStatusById(userId, orderId) {
  const orders = await getOrders(userId)
  return orders.find((order) => order.id === orderId)?.status
}
