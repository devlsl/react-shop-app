import axios from 'axios'
import { URL } from './API'

export async function isThereUserById(id) {
  const query = URL + `users?id=${id}`
  const response = await axios.get(query)
  return response.data.length ? true : false
}
