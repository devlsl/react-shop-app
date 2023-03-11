import axios from 'axios'
import { getCart } from './getCart'

export async function addToCart(userId, itemId, qty) {
  const cart = await getCart(userId)
  const index = cart.findIndex((item) => item.id === itemId)
  if (index === -1) {
    cart.push({ id: itemId, qty: qty })
  } else {
    cart[index].qty += qty
  }
  axios.patch(`http://localhost:3050/users/${userId}`, { cart })
}
