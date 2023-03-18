import { useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useCart } from '../../hooks/useCart'
import { getCart } from '../../serverMethods/getCart'
import { Modal } from '../UI/Modal'
import { ColBox } from '../UI/ColBox'
import { CartList } from './CartList'
import { EmptyCart } from './EmptyCart'
import { CartFooter } from './CartFooter'
import { useTempCart } from '../../hooks/useTempCart'
import { CartForm } from './CartForm'
import { CartHeader } from './CartHeader'

export function Cart() {
  const { user } = useAuth()
  const { closeCart } = useCart()

  const { tempCart, setTempCart } = useTempCart()
  useEffect(() => {
    getCart(user).then((cart) => {
      setTempCart(cart.map((item) => ({ ...item, checked: false })))
    })

    return () => setTempCart(null)
  }, [])

  return (
    <Modal close={closeCart} uiOptions={{ stick: 'right', width: '450px' }}>
      {tempCart &&
        (tempCart.length ? (
          <CartForm>
            <ColBox width="100%" height="100%" justify="start">
              <CartHeader />
              <CartList />
              <CartFooter />
            </ColBox>
          </CartForm>
        ) : (
          <>
            <CartHeader />
            <EmptyCart />
          </>
        ))}
    </Modal>
  )
}
