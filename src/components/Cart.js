import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { CartContext } from '../context/CartContext'
import { getCart } from '../serverMethods/getCart'
import { Modal } from './UI/Modal'

const StyledCartContent = styled.div`
  color: red;

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export function Cart() {
  const { closeCart } = useContext(CartContext)
  console.log('корзина отрисовалась')

  // {/* // MARK!!! поменять 1 на userId когда сделаю контекст для юзера */}
  const [temp, setTemp] = useState([])
  useEffect(() => {
    getCart(1).then(setTemp)
  }, [])

  return (
    <Modal close={closeCart} uiOptions={{ stick: 'right' }}>
      <StyledCartContent>
        {temp &&
          temp.map((item) => (
            <h1 key={item.id} style={{ marginRight: '10px' }}>
              {item.id}:{item.qty}
            </h1>
          ))}
      </StyledCartContent>
    </Modal>
  )
}
