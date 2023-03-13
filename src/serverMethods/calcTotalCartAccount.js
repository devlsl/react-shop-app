import { getCart } from './getCart'
import { getItemPrice } from './getItemPrice'

export async function calcTotalCartAccount(userId) {
  const cart = await getCart(userId)
  console.log(cart)

  let totalAccount = 0
  for (let item of cart) {
    const itemPrice = await getItemPrice(item.id)
    totalAccount += itemPrice * item.qty
  }
  console.log(totalAccount)
  return totalAccount
}
