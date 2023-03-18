import { RiShoppingCart2Line } from 'react-icons/ri'
import { useCart } from '../../hooks/useCart'
import { RowBox } from '../UI/RowBox'
import { NonBorderButton } from '../UI/NonBorderButton'
import { useAuth } from '../../hooks/useAuth'
import { useEffect, useState } from 'react'
import { calcCartPrice } from '../../serverMethods/calcCartPrice'

export function OpenCartButton() {
  const { openCart, cartChangeTrigger, isOpen } = useCart()
  const { user } = useAuth()

  const [cartPrice, setCartPrice] = useState(0)
  useEffect(() => {
    if (user) {
      calcCartPrice(user).then(setCartPrice)
    }
  }, [user, cartChangeTrigger, isOpen])

  return (
    <NonBorderButton onClick={openCart}>
      <RowBox gap="4px">
        <RiShoppingCart2Line opacity={0.7} size={21} />
        <span>{cartPrice || 0} руб.</span>
      </RowBox>
    </NonBorderButton>
  )
}
