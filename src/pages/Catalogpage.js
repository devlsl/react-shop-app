import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Card } from '../components/Card'
import { useAuth } from '../hooks/useAuth'
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

  // testing
  // const [test, setTest] = useState()
  // useEffect(() => {
  //   addToCart(1, )
  // }, [])
  // useEffect(() => {
  //   console.log(test)
  // }, [test])
  // testing

  return (
    <CardsWrapper>
      {items.length !== 0 ? (
        items.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            path={item.img}
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
