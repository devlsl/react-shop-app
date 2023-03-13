import styled from 'styled-components'
import { IconButton } from './UI/IconButton'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { addToCart } from '../serverMethods/addToCart'
import { useFavorites } from '../hooks/useFavorites'
import { Input } from './UI/Input'
import { useAuth } from '../hooks/useAuth'
import { useCart } from '../hooks/useCart'
import { toggleToFavorites } from '../serverMethods/toggleToFavorites'
import { isThereItemInFavorites } from '../serverMethods/isThereItemInFavorites'

const StyledCard = styled.div`
  border: 2px solid #f3f3f3;
  border-radius: 40px;
  border-radius: 40px;
  padding: 1rem;
  display: flex;
  width: 250px;
  flex-direction: column;
  justify-content: space-around;
  /* cursor: pointer; */
  gap: 4px;

  p {
    font-size: 16px;
  }

  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 20px 35px rgba(0, 0, 0, 0.06);
    transform: translateY(-2px);
  }
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 6px;
  gap: 3px;

  b {
    font-weight: 600;
    margin-top: 4px;

    span {
      font-weight: 400;
    }
  }
`

const CardFooter = styled.div`
  padding: 8px;

  display: flex;
  flex-wrap: wrap;
  row-gap: 5px;
  gap: 5px;
`

const StyledQtyInput = styled(Input)`
  width: 40px;
`

export function Card({ id, path, title, price, count = 1 }) {
  const { user } = useAuth()

  const { cartHasChanged } = useCart()
  const { favoritesHasChanged } = useFavorites()

  const [qty, setQty] = useState(count)
  const onChangeQty = (e) => {
    let value = e.target.valueAsNumber
    if (value > 9) {
      value = value % 10
    }
    if (value < 1) {
      value = 1
    }
    setQty(value)
  }

  const [isFavorite, setFavorite] = useState(false)
  useEffect(() => {
    if (user) {
      isThereItemInFavorites(user, id).then(setFavorite)
    } else {
      setFavorite(false)
    }
  }, [])

  return (
    <StyledCard>
      <img src={path} alt="item" />
      <InfoWrapper>
        <p>{title}</p>
        <b>
          Цена: <span>{price * qty} руб.</span>
        </b>
      </InfoWrapper>
      {user && (
        <CardFooter>
          <StyledQtyInput
            type="number"
            value={qty}
            onChange={onChangeQty}
            min={1}
            max={9}
          />
          <IconButton
            onClick={async () => {
              await addToCart(user, id, qty)
              cartHasChanged()
            }}
            Icon={<AiOutlinePlus />}
          />
          <IconButton
            onClick={async () => {
              await toggleToFavorites(user, id)
              setFavorite((prev) => !prev)
              favoritesHasChanged()
            }}
            Icon={<MdOutlineFavoriteBorder color={isFavorite ? 'red' : ''} />}
          />
        </CardFooter>
      )}
    </StyledCard>
  )
}
