import axios from 'axios'
import { URL } from './API'
import { getUser } from './getUser'

export async function getCart(userId) {
  const user = await getUser(userId)
  return user.cart
}
