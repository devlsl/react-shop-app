import axios from 'axios'
import { URL } from './API'

export async function getUsers() {
  const query = URL + `users`
  const response = await axios.get(query)
  return response.data
}
