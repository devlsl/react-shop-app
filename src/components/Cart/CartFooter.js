import styled from 'styled-components'
import { useTempCart } from '../../hooks/useTempCart'
import { RowBox } from '../UI/RowBox'
import { calcItemsPrice } from '../../serverMethods/calcItemsPrice'
import { useState, useEffect } from 'react'
import { ColBox } from '../UI/ColBox'
import { Button } from '../UI/Button'

const StyledCartFooter = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;

  height: 160px;
  background-color: white;
  border: 3px solid #f3f3f3;
  border-bottom: none;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`

const DashedLine = styled.div`
  border-bottom: 2px dashed rgba(0, 0, 0, 0.1);
  width: 150px;
  height: 13px;
`

const OrderButton = styled(Button)`
  width: 100%;
  background-color: #a7d867;
  border-radius: 10px;
  font-size: 20px;

  :hover {
    background-color: #97bf63;
  }

  :active {
    background-color: #87aa58;
  }
`

export function CartFooter() {
  const { tempCart } = useTempCart()

  const [tempCartPrice, setTempCartPrice] = useState(0)
  useEffect(() => {
    if (tempCart) {
      calcItemsPrice(tempCart.filter((item) => item.checked)).then(
        setTempCartPrice
      )
    }
  }, [tempCart])

  return (
    <StyledCartFooter>
      <ColBox height="100%" justify="evenly" margin="0 40px 0 40px">
        <RowBox width="100%" gap="15px">
          <div style={{ fontWeight: '400', fontSize: '18px' }}>Итого:</div>
          <DashedLine />
          <div style={{ fontWeight: '500', fontSize: '18px' }}>
            {tempCartPrice || 0} руб.
          </div>
        </RowBox>
        <OrderButton type="submit">Заказать</OrderButton>
      </ColBox>
    </StyledCartFooter>
  )
}
