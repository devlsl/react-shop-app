import { useEffect, useState } from 'react'
import { getItem } from '../serverMethods/getItem'
import { CatalogItem } from './CatalogItem/CatalogItem'

export function CartItem({ id, qty }) {
  const [item, setItem] = useState()

  useEffect(() => {
    getItem(id).then(setItem)
  }, [])

  console.log(item)

  return (
    <>
      {item && (
        <CatalogItem
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
