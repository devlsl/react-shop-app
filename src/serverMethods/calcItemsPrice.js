import { getItemPrice } from './getItemPrice'

export async function calcItemsPrice(items) {
  let itemsPrice = 0

  for (let item of items) {
    const itemPrice = await getItemPrice(item.id)
    itemsPrice += itemPrice * item.qty
  }

  return itemsPrice
}
