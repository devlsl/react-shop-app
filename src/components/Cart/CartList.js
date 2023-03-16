import { CartItem } from './CartItem'
import { ColBox } from '../UI/ColBox'
import styled from 'styled-components'

const StyledCartList = styled.form`
  /* position: absolute;
  top: 80px;
  bottom: 150px;
  right: 0;
  left: 0; */
  height: 400px;
  width: 100%;
  padding: 0 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  /* box-shadow: 0px 10px 9px -10px #000000; */
  border-top: 3px solid #f3f3f3;
  border-bottom: 3px solid #f3f3f3;
`

const StyledCartFooter = styled.div`
  height: 100px;
  background-color: red;
`

const submitFormHandle = (e) => {
  e.preventDefault()
  const values = Array.from(e.target.elements)
    .filter((el) => el.type === 'checkbox')
    .filter((el) => el.checked)
    .map((el) => el.value)

  console.log(values)
}

export function CartList({ items }) {
  return (
    <form onSubmit={submitFormHandle}>
      <StyledCartList>
        <ColBox gap="15px">
          {items &&
            items.map((item) => (
              <CartItem key={item.id} id={item.id} initialQty={item.qty} />
            ))}
        </ColBox>
      </StyledCartList>
      <StyledCartFooter>
        <button type="submit">Заказать</button>
      </StyledCartFooter>
    </form>
  )
}
