import axios from 'axios'
import { URL } from './API'
import { getCart } from './getCart'

export async function addToCart(userId, itemId, qty) {
  const cart = await getCart(userId)
  const index = cart.findIndex((item) => item.id === itemId)
  if (index === -1) {
    cart.push({ id: itemId, qty: qty })
  } else {
    cart[index].qty += qty
  }
  await axios.patch(URL + `users/${userId}`, { cart })
}
