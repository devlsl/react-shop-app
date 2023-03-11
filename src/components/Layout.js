import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Cart } from './Cart'
import { Header } from './Header'
import { Container } from './UI/Container'
import { CartContext } from '../context/CartContext'
import { useEffect } from 'react'
import { useCart } from '../hooks/useCart'
import { useFavorites } from '../hooks/useFavorites'
import { FavoritesContext } from '../context/FavoritesContext'

const Wrapper = styled.div`
  min-height: 100vh;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export function Layout() {
  const cart = useCart()
  const favorites = useFavorites()

  // useEffect(() => {
  //   console.log(cart.purchases)
  // }, [cart.purchases])

  // useEffect(() => {
  //   console.log(favorites.items)
  // }, [favorites.items])

  return (
    <>
      <Container>
        <Wrapper>
          <CartContext.Provider value={{ ...cart }}>
            <FavoritesContext.Provider value={{ ...favorites }}>
              <Header />
              {cart.isOpen && <Cart />}
              <Outlet />
            </FavoritesContext.Provider>
          </CartContext.Provider>
        </Wrapper>
      </Container>
    </>
  )
}
