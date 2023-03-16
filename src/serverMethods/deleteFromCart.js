import axios from 'axios'
import { URL } from './API'
import { getCart } from './getCart'

export async function deleteFromCart(userId, itemId) {
  let cart = await getCart(userId)
  cart = cart.filter((item) => item.id !== itemId)
  await axios.patch(URL + `users/${userId}`, { cart })
}
