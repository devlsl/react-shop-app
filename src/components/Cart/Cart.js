import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../../hooks/useAuth'
import { useCart } from '../../hooks/useCart'
import { getCart } from '../../serverMethods/getCart'
import { Modal } from '../UI/Modal'
import { ColBox } from '../UI/ColBox'
import { RowBox } from '../UI/RowBox'
import { CloseCartButton } from './CloseCartButton'
import { CartList } from './CartList'
import { EmptyCart } from './EmptyCart'

export function Cart() {
  const { user } = useAuth()
  const { closeCart, cartChangeTrigger } = useCart()

  const [items, setItems] = useState([])
  useEffect(() => {
    if (user) {
      getCart(user).then(setItems)
    }
  }, [cartChangeTrigger])

  return (
    <Modal close={closeCart} uiOptions={{ stick: 'right', width: '450px' }}>
      {items.length ? (
        <ColBox height="100%">
          <RowBox width="100%" padding="50px 60px 30px 60px">
            <span style={{ fontSize: '23px', fontWeight: 600 }}>Корзина</span>
            <CloseCartButton />
          </RowBox>

          <CartList items={items} />
        </ColBox>
      ) : (
        <EmptyCart />
      )}
    </Modal>
  )
}
