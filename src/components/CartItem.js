import { useEffect, useState } from 'react'
import { getItem } from '../serverMethods/getItem'
import { Card } from './Card'

export function CartItem({ id, qty }) {
  const [item, setItem] = useState()

  useEffect(() => {
    getItem(id).then(setItem)
  }, [])

  console.log(item)

  return (
    <>
      {item && (
        <Card
          id={item.id}
          path={item.img}
          title={item.title}
          price={item.price}
          count={qty}
        />
      )}
    </>
  )
}
