import styled from 'styled-components'
import { Card } from '../components/Card'

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding: 70px 40px;
  row-gap: 70px;
  justify-content: space-evenly;
`

function Catalogpage() {
  return (
    <CardsWrapper>
      <Card path="/img/sneakers/1.jpeg" title="Кроссовки Nike" price={11990} />
      <Card path="/img/sneakers/2.jpeg" title="Кроссовки Nike" price={6450} />
      <Card path="/img/sneakers/3.jpeg" title="Кроссовки Nike" price={3400} />
      <Card path="/img/sneakers/4.jpeg" title="Кроссовки Nike" price={9950} />
      <Card path="/img/sneakers/5.jpeg" title="Кроссовки Nike" price={10590} />
      <Card path="/img/sneakers/6.jpeg" title="Кроссовки Nike" price={9950} />
      <Card path="/img/sneakers/7.jpeg" title="Кроссовки Nike" price={7890} />
      <Card path="/img/sneakers/8.jpeg" title="Кроссовки Nike" price={3400} />
      <Card path="/img/sneakers/9.jpeg" title="Кроссовки Nike" price={6450} />
      <Card path="/img/sneakers/10.jpeg" title="Кроссовки Nike" price={11990} />
    </CardsWrapper>
  )
}

export { Catalogpage }
