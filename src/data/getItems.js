import axios from 'axios'

export async function getItems() {
  const response = await axios('https://fakestoreapi.com/products')
  const data = await response.data
  return data
}
