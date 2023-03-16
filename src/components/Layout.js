import { Outlet } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { useCart } from '../hooks/useCart'
import { Cart } from './Cart/Cart'
import { Header } from './Header/Header'
import { Container } from './UI/Container'

const Wrapper = styled.div`
  min-height: 100vh;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  ${({ isCartOpen }) =>
    isCartOpen &&
    css`
      height: 100vh;
      overflow-y: hidden;
      position: static;
    `}
`

export function Layout() {
  const { isOpen } = useCart()

  return (
    <>
      <Container>
        <Wrapper isCartOpen={isOpen}>
          <Header />
          {isOpen && <Cart />}
          <Outlet />
        </Wrapper>
      </Container>
    </>
  )
}
