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

  return (
    <RowBox padding="30px" style={{ borderBottom: '2px solid #f3f3f3' }}>
      <HeaderLogo />

      {user ? (
        <AuthorizedNav cartAccount={cartAccount} />
      ) : (
        <NonAuthorizedNav />
      )}
    </RowBox>
  )
}
