import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../../hooks/useAuth'
import { useQtyItemInput } from '../../hooks/useQtyItemInput'
import { getItem } from '../../serverMethods/getItem'
import { AddToFavoritesButton } from '../UI/AddToFavoritesButton'
import { Checkbox } from '../UI/CheckBox'
import { ColBox } from '../UI/ColBox'
import { DeleteFromCartButton } from '../UI/DeleteFromCartButton'
import { RowBox } from '../UI/RowBox'

const StyledCartItem = styled.label`
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  padding: 0.2rem;
  transition: box-shadow 0.1s ease-in-out;

  &,
  * {
    cursor: auto;
  }

  input {
    cursor: pointer;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px;
  }

  &:active {
    transform: translateY(1px);
  }

  &:has(input:checked) {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px;
  }
`

const Label = ({ children }) => {
  return (
    <StyledCartItem>
      <RowBox gap="15px" padding="10px">
        {children}
      </RowBox>
    </StyledCartItem>
  )
}

export function CartItem({ id, initialQty }) {
  const [item, setItem] = useState()
  const [qty, Input] = useQtyItemInput(initialQty)
  const { user } = useAuth()

  useEffect(() => {
    getItem(id).then(setItem)
  }, [])

  return (
    <>
      {item && (
        <Checkbox key={id} Label={Label} checked={false} value={id}>
          <img src={item.img} alt="item" width="70px" />
          <ColBox align="start" gap="10px">
            <ColBox align="start" gap="4px">
              <div>{item.title}</div>
              <div>
                <b>Цена: </b>
                {item.price * qty} руб.
              </div>
            </ColBox>
            <RowBox gap="10px" justify="start">
              {Input}
              <AddToFavoritesButton userId={user} itemId={item.id} />
              <DeleteFromCartButton userId={user} itemId={item.id} />
            </RowBox>
          </ColBox>
        </Checkbox>
      )}
    </>
  )
}
