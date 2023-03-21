import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CatalogItem } from '../components/CatalogItem/CatalogItem'
import { CatalogItemSkeleton } from '../components/CatalogItem/CatalogItemSkeleton'
import { CardsWrapper } from '../components/UI/CardsWrapper'
import { ColBox } from '../components/UI/ColBox'
import { Input } from '../components/UI/Input'
import { RowBox } from '../components/UI/RowBox'
import { Select } from '../components/UI/Select'
import { useAuth } from '../hooks/useAuth'
import { getFavorites } from '../serverMethods/getFavorites'
import { getFilteredItems } from '../serverMethods/getFilteredItems'
import { getItems } from '../serverMethods/getItems'

export function Catalogpage() {
  const [items, setItems] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)

  const [totalCount, setTotalCount] = useState(0)

  const [sort, setSort] = useState('none')
  const onChangeSort = (e) => {
    setSort(e.target.value)
    setItems([])
    setCurrentPage(1)
    setFetching(true)
  }

  const [search, setSearch] = useState('')
  const onChangeSearch = (e) => {
    setSearch(e.target.value)
    setItems([])
    setCurrentPage(1)
    setFetching(true)
  }
  useEffect(() => {
    if (fetching) {
      getFilteredItems(currentPage, search, sort)
        .then(({ newItems, totalCount }) => {
          setItems((prev) => [...prev, ...newItems])
          setCurrentPage((prev) => prev + 1)
          setTotalCount(totalCount)
        })
        .finally(() => setFetching(false))
    }

    // getFilteredItems(items, options).then(set)
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)

    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  })

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      items.length < totalCount
    ) {
      setFetching(true)
    }
  }

  return (
    <>
      <ColBox padding="50px 45px" gap="40px">
        <RowBox width="100%">
          <span style={{ fontSize: '30px', fontWeight: '500' }}>Товары</span>

          <RowBox gap="20px">
            <Select value={sort} onChange={onChangeSort}>
              <option defaultValue value="none" disabled>
                сортировка по цене
              </option>
              <option value="none">не сортировать</option>
              <option value="asc">сначала дешёвые</option>
              <option value="desc">сначала дорогие</option>
            </Select>
            <Input
              value={search}
              placeholder="поиск..."
              onChange={onChangeSearch}
            />
          </RowBox>
        </RowBox>
        <CardsWrapper padding="0px">
          {totalCount > 0 ? (
            items.map((item) => (
              <CatalogItem
                key={item.id}
                id={item.id}
                path={item.img}
                title={item.title}
                price={item.price}
              />
            ))
          ) : (
            <ColBox height="75vh" width="100%" justify="center">
              <ColBox gap="20px">
                <img src="/img/sad.png" alt="sad" width={80} height={80} />
                <span>Таких товаров нет :(</span>
              </ColBox>
            </ColBox>
          )}
        </CardsWrapper>
      </ColBox>
    </>
  )
}

// <>
//   {[...Array(10).keys()].map((i) => (
//     <CatalogItemSkeleton key={i} />
//   ))}
// </>
