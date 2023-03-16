import { GrFormClose } from 'react-icons/gr'
import { useCart } from '../../hooks/useCart'
import { BorderButton } from '../UI/BorderButton'

export function CloseCartButton() {
  const { closeCart } = useCart()

  return (
    <BorderButton onClick={closeCart}>
      <GrFormClose size={20} />
    </BorderButton>
  )
}
