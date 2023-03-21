import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CatalogItem } from '../components/CatalogItem/CatalogItem'
import { CatalogItemSkeleton } from '../components/CatalogItem/CatalogItemSkeleton'
import { CardsWrapper } from '../components/UI/CardsWrapper'
import { ColBox } from '../components/UI/ColBox'
import { RowBox } from '../components/UI/RowBox'
import { useAuth } from '../hooks/useAuth'
import { useFavorites } from '../hooks/useFavorites'
import { getFavorites } from '../serverMethods/getFavorites'
import { getItem } from '../serverMethods/getItem'
import { getItems } from '../serverMethods/getItems'

function FavoriteItem(props) {
  const { id } = props.item
  const [item, setItem] = useState(null)

  useEffect(() => {
    getItem(id).then(setItem)
  }, [])

  return (
    <>
      {item && (
        <CatalogItem
          key={item.id}
          id={item.id}
          path={item.img}
          title={item.title}
          price={item.price}
        />
      )}
    </>
  )
}

export function Favoreitespage() {
  const [favorites, setFavorites] = useState(null)
  const { favoritesChangeTrigger } = useFavorites()
  const { user } = useAuth()

  useEffect(() => {
    getFavorites(user).then(setFavorites)
  }, [favoritesChangeTrigger])

  return (
    <>
      {favorites ? (
        favorites.length ? (
          <ColBox padding="50px 0" gap="10px">
            <RowBox padding="0 40px" justify="start" width="100%" gap="20px">
              <span style={{ fontSize: '30px', fontWeight: '500' }}>
                Избранные
              </span>
            </RowBox>
            <CardsWrapper padding="30px 40px">
              {favorites.map((item) => (
                <FavoriteItem key={item.id} item={item} />
              ))}
            </CardsWrapper>
          </ColBox>
        ) : (
          <ColBox height="75vh" width="100%" justify="center">
            <ColBox gap="20px">
              <img src="/img/sad.png" alt="sad" width={80} height={80} />
              <span>Здесь пока пусто :(</span>
            </ColBox>
          </ColBox>
        )
      ) : (
        <>
          {/* {[...Array(9).keys()].map((i) => (
            <CatalogItemSkeleton key={i} />
          ))} */}
        </>
      )}
    </>
  )
}
