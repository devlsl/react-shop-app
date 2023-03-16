import { useCart } from '../../hooks/useCart'
import { BorderButton } from './BorderButton'
import { RiDeleteBinLine } from 'react-icons/ri'
import { deleteFromCart } from '../../serverMethods/deleteFromCart'

export function DeleteFromCartButton({ userId, itemId, itemQty }) {
  const { cartHasChanged } = useCart()

  const onClick = async () => {
    await deleteFromCart(userId, itemId)
    cartHasChanged()
  }

  return (
    <BorderButton onClick={onClick}>
      <RiDeleteBinLine />
    </BorderButton>
  )
}
