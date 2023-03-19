import { randId, randTrack } from '../utils/utils'
import { isThereOrderById } from './isThereOrderById'
import { isThereOrderByTrack } from './isThereOrderByTrack'

export async function generateUniqueOrderIdForUser(userId) {
  let isUnique = false
  let orderId

  while (!isUnique) {
    orderId = randId()
    isUnique = !(await isThereOrderById(userId, orderId))
  }

  return orderId
}
