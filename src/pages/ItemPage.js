import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DeleteFromCartButton } from '../components/Cart/DeleteFromCartButton'
import { AddToCartButton } from '../components/UI/AddToCartButton'
import { AddToFavoritesButton } from '../components/UI/AddToFavoritesButton'
import { ColBox } from '../components/UI/ColBox'
import { RowBox } from '../components/UI/RowBox'
import { useAuth } from '../hooks/useAuth'
import { useQtyItemInput } from '../hooks/useQtyItemInput'
import { getItem } from '../serverMethods/getItem'

export function ItemPage() {
  const { id } = useParams()
  const [item, setItems] = useState(null)
  useEffect(() => {
    getItem(id).then(setItems)
  })

  const { user } = useAuth()
  const [qty, QtyInput] = useQtyItemInput(1)

  return (
    <>
      {item ? (
        <RowBox margin="60px" height="60vh" gap="10px">
          <img src={item.img} width="50%" alt="item" />
          <ColBox
            align="start"
            justify="start"
            height="100%"
            padding="40px 10px"
            gap="10px"
          >
            <span style={{ fontSize: '25px' }}>{item.title}</span>
            <div style={{ fontSize: '25px' }}>
              <b>Цена: </b>
              <span>{parseInt(item.price).toLocaleString()} руб.</span>
            </div>
            {user && (
              <RowBox gap="10px" justify="start">
                {QtyInput}
                <AddToCartButton userId={user} itemId={id} itemQty={qty} />
                <AddToFavoritesButton userId={user} itemId={item.id} />
              </RowBox>
            )}
          </ColBox>
        </RowBox>
      ) : (
        <ColBox height="75vh" width="100%" justify="center">
          <ColBox gap="20px">
            <img src="/img/sad.png" alt="sad" width={80} height={80} />
            <span>Такого товара нет :(</span>
          </ColBox>
        </ColBox>
      )}
    </>
  )
}
