import axios from 'axios'
import { URL } from './API'

export async function getItem(id) {
  const query = URL + `items/${id}`
  const response = await axios.get(query)
  return response.data
}
