import axios from 'axios'
import { URL } from './API'
import { generateUniqueOrderIdForUser } from './generateUniqueOrderIdForUser'
import { generateUniqueTrackForUser } from './generateUniqueTrackForUser'
import { getOrders } from './getOrders'

export async function addOrder(userId, orderItems, orderAmount) {
  const uniqueTrack = await generateUniqueTrackForUser(userId)
  const uniqueId = await generateUniqueOrderIdForUser(userId)

  // let date =
  // console.log(jsonDate.toString())

  // let objDate = Date(jsonDate)
  // console.log(objDate.toLocaleString())

  const orders = await getOrders(userId)
  orders.push({
    id: uniqueId,
    amount: orderAmount,
    items: orderItems,
    status: 'в обработке',
    track: uniqueTrack,
    date: Date.now().toString()
  })
  await axios.patch(URL + `users/${userId}`, { orders })
}
