import axios from 'axios'
import { URL } from './API'

export async function getFilteredItems(page = 1, search, sort = 'none') {
  const sortParam = sort === 'none' ? '' : `&_sort=price&_order=${sort}`
  const params = `?q=${search}${sortParam}&_page=${page}&_limit=15`

  const query = URL + `items` + params
  const response = await axios.get(query)
  return {
    newItems: response.data,
    totalCount: response.headers['x-total-count']
  }
}
