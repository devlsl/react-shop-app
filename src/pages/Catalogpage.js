import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CatalogItem } from '../components/CatalogItem/CatalogItem'
import { CatalogItemSkeleton } from '../components/CatalogItem/CatalogItemSkeleton'
import { getItems } from '../serverMethods/getItems'

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 60px 30px;
  row-gap: 60px;
  justify-content: space-evenly;
  align-items: flex-start;
`

function Catalogpage() {
  const [items, setItems] = useState([])

  useEffect(() => {
    getItems().then(setItems)
  }, [])

  return (
    <CardsWrapper>
      {items.length !== 0 ? (
        items.map((item) => (
          <CatalogItem
            key={item.id}
            id={item.id}
            path={item.img}
            title={item.title}
            price={item.price}
          />
        ))
      ) : (
        <>
          {[...Array(10).keys()].map((i) => (
            <CatalogItemSkeleton key={i} />
          ))}
        </>
      )}
    </CardsWrapper>
  )
}

export { Catalogpage }
