import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../hooks/useAuth'
import { useCart } from '../hooks/useCart'
import { getCart } from '../serverMethods/getCart'
import { CartItem } from './CartItem'
import { Modal } from './UI/Modal'

const StyledCartContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
`

export function Cart() {
  const { closeCart } = useCart()
  const { user } = useAuth()

  const [items, setItems] = useState([])
  useEffect(() => {
    if (user) {
      getCart(user).then(setItems)
    }
  }, [])

  return (
    <Modal close={closeCart} uiOptions={{ stick: 'right', width: '500px' }}>
      <StyledCartContent>
        {items &&
          items.map((item) => (
            <CartItem key={item.id} id={item.id} qty={item.qty} />
          ))}
        <button onClick={closeCart}>закрыть корзину</button>
      </StyledCartContent>
    </Modal>
  )
}
