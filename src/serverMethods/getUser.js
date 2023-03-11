import axios from 'axios'
import { URL } from './API'

export async function getUser(id) {
  const query = URL + `users/${id}`
  const response = await axios.get(query)
  return response.data
}
