import { useEffect, useState } from 'react'
import { useFavorites } from '../../hooks/useFavorites'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { isThereItemInFavorites } from '../../serverMethods/isThereItemInFavorites'
import { toggleToFavorites } from '../../serverMethods/toggleToFavorites'
import { IconButton } from '../UI/IconButton'

export function AddToFavoritesButton({ userId, itemId }) {
  const { favoritesHasChanged } = useFavorites()
  const [isFavorite, setFavorite] = useState(false)
  useEffect(() => {
    if (userId) {
      isThereItemInFavorites(userId, itemId).then(setFavorite)
    } else {
      setFavorite(false)
    }
  }, [])

  const onClick = async () => {
    await toggleToFavorites(userId, itemId)
    setFavorite((prev) => !prev)
    favoritesHasChanged()
  }

  const color = isFavorite ? 'red' : ''

  return (
    <IconButton
      onClick={onClick}
      Icon={<MdOutlineFavoriteBorder color={color} />}
    />
  )
}
