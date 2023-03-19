import axios from 'axios'
import { URL } from './API'

export async function setCart(userId, cart = []) {
  await axios.patch(URL + `users/${userId}`, { cart })
}
