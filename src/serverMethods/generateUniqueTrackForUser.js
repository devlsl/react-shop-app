import { randTrack } from '../utils/utils'
import { isThereOrderByTrack } from './isThereOrderByTrack'

export async function generateUniqueTrackForUser(userId) {
  let isUnique = false
  let track

  while (!isUnique) {
    track = randTrack()
    isUnique = !(await isThereOrderByTrack(userId, track))
  }

  return track
}
