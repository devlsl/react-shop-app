import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Card } from '../components/Card'
import { getItems } from '../data/getItems'

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding: 70px 40px;
  row-gap: 70px;
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
          <Card
            key={item.id}
            id={item.id}
            path={item.image}
            title={item.title}
            price={item.price}
          />
        ))
      ) : (
        <h1>загрузка</h1>
      )}
    </CardsWrapper>
  )
}

export { Catalogpage }
