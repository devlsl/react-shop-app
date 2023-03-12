import axios from 'axios'
import { URL } from './API'

export async function addUser(phone, password) {
  axios.post(URL + 'users', {
    phone,
    password,
    cart: [],
    favorites: [],
    orders: []
  })
}
