import { RiShoppingCart2Line } from 'react-icons/ri'
import styled from 'styled-components'
import { useCart } from '../../hooks/useCart'
import { RowBox } from '../UI/RowBox'

const StyledCartButton = styled.button`
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  font-size: 16px;

  :hover {
    color: rgba(0, 0, 0, 0.9);
  }
`

export function OpenCartButton({ cartAccount }) {
  const { openCart } = useCart()

  return (
    <StyledCartButton onClick={openCart}>
      <RowBox gap="4px">
        <RiShoppingCart2Line opacity={0.7} size={21} />
        <span>{cartAccount || 0} руб.</span>
      </RowBox>
    </StyledCartButton>
  )
}
