import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { RowBox } from './UI/RowBox'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 30px;
  margin: 0;

  border-bottom: 2px solid #f3f3f3;

  a {
    color: rgba(0, 0, 0, 0.57);

    &.active,
    :hover {
      color: rgba(0, 0, 0, 0.8);
    }
  }

  .cartOpenBtn {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.7);
    font-size: 16px;

    :hover {
      color: rgba(0, 0, 0, 0.9);
    }
  }
`

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 45px;
    height: 45px;
  }
`

const HeadingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  h2,
  h3 {
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 1.2rem;
    /* font-size: 18px; */
    font-weight: 700;
    color: rgba(0, 0, 0, 0.65);
  }

  h3 {
    font-size: 1rem;

    color: rgba(0, 0, 0, 0.24);
  }
`

export function Header() {
  const { openCart } = useContext(CartContext)

  return (
    <StyledHeader>
      <InfoWrapper>
        <img src="/img/logo.png" alt="logo" />

        <HeadingsWrapper>
          <h2>React Shop</h2>
          <h3>Интернет магазин</h3>
        </HeadingsWrapper>
      </InfoWrapper>

      <RowBox gap="60px">
        <RowBox
          gap="30px"
          style={{
            fontWeight: '400',
            fontSize: '18px'
          }}
        >
          <NavLink to="/">Каталог</NavLink>
          <NavLink to="tracking">Отследить заказ</NavLink>
        </RowBox>

        <RowBox gap="20px">
          <button className="cartOpenBtn" onClick={openCart}>
            <RowBox gap="4px">
              <RiShoppingCart2Line opacity={0.7} size={21} />
              <span>1205 Руб.</span>
            </RowBox>
          </button>
          <NavLink to="orders">
            <RowBox>
              <HiOutlineUserCircle opacity={0.7} size={21} />
            </RowBox>
          </NavLink>
        </RowBox>
      </RowBox>
    </StyledHeader>
  )
}
