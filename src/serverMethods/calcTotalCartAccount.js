import { getCart } from './getCart'
import { getItemPrice } from './getItemPrice'

export async function calcTotalCartAccount(userId) {
  const cart = await getCart(userId)

  // const totalAccount = cart.reduce((currentAccount, item) => {
  //   const itemPrice = await getItemPrice(item.id)

  //   return currentAccount + item.qty * itemPrice
  // }, 0)

  let totalAccount = 0
  for (let item of cart) {
    const itemPrice = await getItemPrice(item.id)
    totalAccount += itemPrice
  }

  return totalAccount
}
