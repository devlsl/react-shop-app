import styled from 'styled-components'
import { ColBox } from '../UI/ColBox'
import { RowBox } from '../UI/RowBox'

const Title = styled.span`
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.65);
`

const Tagline = styled.span`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.24);
`

export function HeaderLogo() {
  return (
    <RowBox gap="1rem">
      <img width="45px" height="45px" src="/img/logo.png" alt="logo" />

      <ColBox align="start">
        <Title>React Shop</Title>
        <Tagline>Интернет магазин</Tagline>
      </ColBox>
    </RowBox>
  )
}
