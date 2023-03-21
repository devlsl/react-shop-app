import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../../hooks/useAuth'
import { useQtyItemInput } from '../../hooks/useQtyItemInput'
import { AddToCartButton } from '../UI/AddToCartButton'
import { AddToFavoritesButton } from '../UI/AddToFavoritesButton'
import { CardWrapper } from '../UI/CardWrapper'
import { ColBox } from '../UI/ColBox'
import { RowBox } from '../UI/RowBox'

const CatalogItemWrapper = styled(CardWrapper)`
  transition: box-shadow 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 20px 35px rgba(0, 0, 0, 0.06);
    transform: translateY(-2px);
  }
`

export function CatalogItem({ id, path, title, price, count = 1 }) {
  const { user } = useAuth()
  const [qty, Input] = useQtyItemInput(count)

  return (
    <CatalogItemWrapper>
      <ColBox gap="18px" padding="0 0 4px 0">
        <Link to={`/${id}`}>
          <img src={path} alt="item" />
        </Link>

        <ColBox width="90%" gap="8px" align="start">
          <div>{title}</div>
          <div>
            <b>Цена: </b>
            {(price * qty).toLocaleString()} руб.
          </div>
        </ColBox>

        {user && (
          <RowBox width="90%" gap="10px" justify="start">
            {Input}
            <AddToCartButton userId={user} itemId={id} itemQty={qty} />
            <AddToFavoritesButton userId={user} itemId={id} />
          </RowBox>
        )}
      </ColBox>
    </CatalogItemWrapper>
  )
}
