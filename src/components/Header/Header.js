import { RowBox } from '../UI/RowBox'
import { useEffect, useState } from 'react'
import { calcCartPrice } from '../../serverMethods/calcCartPrice'
import { useAuth } from '../../hooks/useAuth'
import { useCart } from '../../hooks/useCart'
import { HeaderLogo } from './HeaderLogo'
import { AuthorizedNav } from './AuthorizedNav'
import { NonAuthorizedNav } from './NonAuthorizedNav'

export function Header() {
  const { user } = useAuth()

  const userStorage = window.localStorage.getItem('user')

  const needRenderHeader = userStorage && !user ? false : true

  return (
    <RowBox padding="30px" style={{ borderBottom: '2px solid #f3f3f3' }}>
      <HeaderLogo />

      {needRenderHeader && (user ? <AuthorizedNav /> : <NonAuthorizedNav />)}
    </RowBox>
  )
}
