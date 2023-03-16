import { RowBox } from '../UI/RowBox'
import { useEffect, useState } from 'react'
import { calcTotalCartAccount } from '../../serverMethods/calcTotalCartAccount'
import { useAuth } from '../../hooks/useAuth'
import { useCart } from '../../hooks/useCart'
import { HeaderLogo } from './HeaderLogo'
import { AuthorizedNav } from './AuthorizedNav'
import { NonAuthorizedNav } from './NonAuthorizedNav'

export function Header() {
  const { cartChangeTrigger, isOpen } = useCart()
  const { user } = useAuth()

  const [cartAccount, setCartAccount] = useState(0)
  useEffect(() => {
    if (user) {
      calcTotalCartAccount(user).then(setCartAccount)
    }
  }, [user, cartChangeTrigger, isOpen])

  const userStorage = window.localStorage.getItem('user')

  const needRenderHeader = userStorage && !user ? false : true
  console.log('render Header')

  return (
    <RowBox padding="30px" style={{ borderBottom: '2px solid #f3f3f3' }}>
      <HeaderLogo />

      {needRenderHeader &&
        (user ? (
          <AuthorizedNav cartAccount={cartAccount} />
        ) : (
          <NonAuthorizedNav />
        ))}
    </RowBox>
  )
}
