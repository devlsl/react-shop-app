import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { CartContext } from '../hoc/CartProvider'
import { Cart } from './Cart'
import { Header } from './Header'
import { Container } from './UI/Container'

const Wrapper = styled.div`
  min-height: 100vh;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export function Layout() {
  const { isOpen } = useContext(CartContext)

  return (
    <>
      <Container>
        <Wrapper>
          <Header />
          {isOpen && <Cart />}
          <Outlet />
        </Wrapper>
      </Container>
    </>
  )
}
