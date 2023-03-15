import { useCart } from '../../hooks/useCart'
import { addToCart } from '../../serverMethods/addToCart'
import { IconButton } from '../UI/IconButton'
import { AiOutlinePlus } from 'react-icons/ai'

export function AddToCartButton({ userId, itemId, itemQty }) {
  const { cartHasChanged } = useCart()

  const onClick = async () => {
    await addToCart(userId, itemId, itemQty)
    cartHasChanged()
  }

  return <IconButton onClick={onClick} Icon={<AiOutlinePlus />} />
}
