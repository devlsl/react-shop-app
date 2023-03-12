import axios from 'axios'
import { URL } from './API'

export async function isThereUserByPhone(phone) {
  const query = URL + `users?phone=${phone}`
  const response = await axios.get(query)
  console.log(response.data.length ? true : false)
  return response.data.length ? true : false
}
