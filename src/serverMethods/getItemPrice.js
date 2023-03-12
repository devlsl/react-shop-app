import { getItem } from './getItem'

export async function getItemPrice(id) {
  const item = await getItem(id)
  return item.price
}
