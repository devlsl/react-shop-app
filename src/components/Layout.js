import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Cart } from './Cart'
import { Header } from './Header'
import { Container } from './UI/Container'
import { CartContext } from '../context/CartContext'
import { useState } from 'react'

const Wrapper = styled.div`
  min-height: 100vh;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export function Layout() {
  const [cartIsOpen, setCartOpen] = useState(false)
  const openCart = () => setCartOpen(true)
  const closeCart = () => setCartOpen(false)

  return (
    <>
      <Container>
        <Wrapper>
          <CartContext.Provider
            value={{ cartIsOpen, setCartOpen, openCart, closeCart }}
          >
            <Header />

            <Cart />
          </CartContext.Provider>
          <Outlet />
        </Wrapper>
      </Container>
    </>
  )
}
