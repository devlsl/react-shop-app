import axios from 'axios'
import { URL } from './API'
import { getOrders } from './getOrders'

export async function changeOrderStatus(userId, orderId) {
  const statuses = [
    'отклонён',
    'в обработке',
    'обработан',
    'в пути',
    'доставлен',
    'получен'
  ]

  const orders = await getOrders(userId)
  const orderIndex = orders.findIndex((order) => order.id === orderId)

  let newStatusIndex = statuses.findIndex(
    (status) => status === orders[orderIndex].status
  )
  newStatusIndex =
    newStatusIndex === statuses.length - 1 ? 0 : newStatusIndex + 1
  orders[orderIndex].status = statuses[newStatusIndex]
  await axios.patch(URL + `users/${userId}`, { orders })
}
