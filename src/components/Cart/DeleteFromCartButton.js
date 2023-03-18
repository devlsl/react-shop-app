import { useCart } from '../../hooks/useCart'
import { BorderButton } from '../UI/BorderButton'
import { RiDeleteBinLine } from 'react-icons/ri'
import { deleteFromCart } from '../../serverMethods/deleteFromCart'
import { useTempCart } from '../../hooks/useTempCart'

export function DeleteFromCartButton({ userId, itemId }) {
  const { cartHasChanged } = useCart()
  const { deleteFromTempCart } = useTempCart()

  const onClick = async () => {
    await deleteFromCart(userId, itemId)
    deleteFromTempCart(itemId)
    cartHasChanged()
  }

  return (
    <BorderButton onClick={onClick}>
      <RiDeleteBinLine />
    </BorderButton>
  )
}
