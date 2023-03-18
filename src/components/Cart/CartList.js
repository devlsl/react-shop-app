import { CartItem } from './CartItem'
import { ColBox } from '../UI/ColBox'
import styled from 'styled-components'
import { useTempCart } from '../../hooks/useTempCart'
import { RiContactsBookLine } from 'react-icons/ri'

const StyledCartList = styled.div`
  /* position: absolute;
  top: 80px;
  bottom: 150px;
  right: 0;
  left: 0; */
  height: 60vh;
  width: 100%;
  padding: 20px 60px;

  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  /* box-shadow: 0px 10px 9px -10px #000000; */
  /* border-top: 3px solid #f3f3f3;
  border-bottom: 3px solid #f3f3f3; */
`

export function CartList() {
  const { tempCart } = useTempCart()
  return (
    <StyledCartList>
      <ColBox gap="15px" style={{ paddingBottom: '100px' }}>
        {tempCart &&
          tempCart.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                initialQty={item.qty}
                initialChecked={item.checked}
              />
            )
          })}
      </ColBox>
    </StyledCartList>
  )
}
