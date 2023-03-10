import { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../context/CartContext'
import { Modal } from './UI/Modal'

const StyledCartContent = styled.div`
  color: red;

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export function Cart() {
  const { cartIsOpen, closeCart, purchases } = useContext(CartContext)

  return (
    <Modal isOpen={cartIsOpen} close={closeCart} uiOptions={{ stick: 'right' }}>
      <StyledCartContent>
        {purchases.map((purchase, i) => (
          <h1 key={i}>{purchase}</h1>
        ))}
      </StyledCartContent>
    </Modal>
  )
}
