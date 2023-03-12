import axios from 'axios'
import { URL } from './API'

export async function checkUser(phone, password) {
  const params = `?phone=${phone}&password=${password}`
  const query = URL + `users` + params
  const response = await axios.get(query)
  const user = response.data[0]

  if (user) {
    return user.id
  }
  throw new Error('incorrect phone number or password')
}
