import { RowBox } from '../UI/RowBox'
import { CloseCartButton } from './CloseCartButton'

export function CartHeader() {
  return (
    <RowBox width="100%" padding="50px 60px 30px">
      <div style={{ fontSize: '23px', fontWeight: 600 }}>Корзина</div>
      <CloseCartButton />
    </RowBox>
  )
}
