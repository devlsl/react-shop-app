import { calcItemsPrice } from './calcItemsPrice'
import { getCart } from './getCart'

export async function calcCartPrice(userId) {
  const cart = await getCart(userId)

  return await calcItemsPrice(cart)
}
