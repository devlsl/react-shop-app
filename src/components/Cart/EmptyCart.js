import { ColBox } from '../UI/ColBox'

export function EmptyCart() {
  return (
    <ColBox justify="center" align="center" height="75%" gap="20px">
      <img src="img/emptyCart.svg" width="100px" alt="empty" />
      <span>Корзина пуста</span>
    </ColBox>
  )
}
