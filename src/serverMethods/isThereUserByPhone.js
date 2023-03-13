import axios from 'axios'
import { URL } from './API'

export async function isThereUserByPhone(phone) {
  const query = URL + `users?phone=${phone}`
  const response = await axios.get(query)
  return response.data.length ? true : false
}
