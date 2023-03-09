import { Children, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { CartContext } from '../context/CartContext'
import { Modal } from './UI/Modal'

// const StyledCart = styled.div`
//   color: red;
// `

export function Cart() {
  const { cartIsOpen, closeCart } = useContext(CartContext)

  return (
    <Modal
      isOpen={cartIsOpen}
      close={closeCart}
      uiOptions={{ stick: 'right' }}
    ></Modal>
  )
}
