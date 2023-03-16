import { RiShoppingCart2Line } from 'react-icons/ri'
import { useCart } from '../../hooks/useCart'
import { RowBox } from '../UI/RowBox'
import { NonBorderButton } from '../UI/NonBorderButton'

export function OpenCartButton({ cartAccount }) {
  const { openCart } = useCart()

  return (
    <NonBorderButton onClick={openCart}>
      <RowBox gap="4px">
        <RiShoppingCart2Line opacity={0.7} size={21} />
        <span>{cartAccount || 0} руб.</span>
      </RowBox>
    </NonBorderButton>
  )
}
