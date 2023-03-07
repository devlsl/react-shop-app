import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { NavBarItem } from './UI/NavBarItem'
import { UserBarItem } from './UI/UserBarItem'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { HiOutlineUserCircle } from 'react-icons/hi'

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 30px;
  margin: 0;

  border-bottom: 2px solid #f3f3f3;
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
  return (
    <StyledHeader>
      <InfoWrapper>
        <img src="/img/logo.png" alt="logo" />

        <HeadingsWrapper>
          <h2>React Sneakers</h2>
          <h3>Интернет магазин кроссовок</h3>
        </HeadingsWrapper>
      </InfoWrapper>

      <NavBarItem gap="60px">
        <NavBarItem
          gap="30px"
          style={{
            fontWeight: '400',
            color: 'rgba(0, 0, 0, 0.7)',
            fontSize: '18px'
          }}
        >
          <NavLink to="/">Каталог</NavLink>
          <NavLink to="about">Отследить заказ</NavLink>
          {/* <div>Отследить заказ</div> */}
        </NavBarItem>

        <NavBarItem
          gap="20px"
          style={{
            fontWeight: '500',
            color: 'rgba(0, 0, 0, 0.8)',
            fontSize: '16px'
          }}
        >
          <UserBarItem gap="4px">
            <RiShoppingCart2Line opacity={0.7} size={21} />
            <span>1205 Руб.</span>
          </UserBarItem>
          <UserBarItem>
            <HiOutlineUserCircle opacity={0.7} size={21} />
          </UserBarItem>
        </NavBarItem>
      </NavBarItem>
    </StyledHeader>
  )
}
