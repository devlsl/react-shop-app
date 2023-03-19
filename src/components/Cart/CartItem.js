import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../../hooks/useAuth'
import { useCart } from '../../hooks/useCart'
import { useQtyItemInput } from '../../hooks/useQtyItemInput'
import { useTempCart } from '../../hooks/useTempCart'
import { getItem } from '../../serverMethods/getItem'
import { AddToFavoritesButton } from '../UI/AddToFavoritesButton'
import { Checkbox } from '../UI/CheckBox'
import { ColBox } from '../UI/ColBox'
import { RowBox } from '../UI/RowBox'
import { DeleteFromCartButton } from './DeleteFromCartButton'

const StyledCartItem = styled.label`
  border: 2px solid #f3f3f3;
  border-radius: 10px;
  padding: 0.2rem;
  transition: box-shadow 0.1s ease-in-out;

  &,
  * {
    cursor: auto;
  }

  input,
  button,
  button *,
  img {
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

export function CartItem({ id, initialQty, initialChecked = false }) {
  const [item, setItem] = useState()
  const [qty, QtyInput] = useQtyItemInput(initialQty)
  const { user } = useAuth()

  const [checked, setChecked] = useState(initialChecked)
  const onChangeChecked = () => setChecked((prev) => !prev)

  useEffect(() => {
    getItem(id).then(setItem)
  }, [])

  const { setItemTempCart } = useTempCart()

  useEffect(() => {
    setItemTempCart(id, qty, checked)
  }, [qty, checked])

  const { closeCart } = useCart()

  return (
    <>
      {item && (
        <Checkbox
          Label={Label}
          checked={checked}
          onChange={onChangeChecked}
          value={id}
        >
          {/* доработать  */}
          <Link onClick={closeCart} to="tracking">
            <img src={item.img} alt="item" width="70px" />
          </Link>
          <ColBox align="start" gap="10px">
            <ColBox align="start" gap="4px">
              <div>{item.title}</div>
              <div>
                <b>Цена: </b>
                {(item.price * qty).toLocaleString()} руб.
              </div>
            </ColBox>
            <RowBox gap="10px" justify="start">
              {QtyInput}
              <AddToFavoritesButton userId={user} itemId={item.id} />
              <DeleteFromCartButton userId={user} itemId={item.id} />
            </RowBox>
          </ColBox>
        </Checkbox>
      )}
    </>
  )
}
