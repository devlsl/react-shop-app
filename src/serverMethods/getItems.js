import axios from 'axios'
import { URL } from './API'

export async function getItems(params = '') {
  const query = URL + `items` + params
  const response = await axios.get(query)
  return response.data
}
