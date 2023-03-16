import { RowBox } from '../UI/RowBox'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { BiBookmarkHeart } from 'react-icons/bi'
import { CustomLink } from './CustomLink'
import { OpenCartButton } from './OpenCartButton'
import { SignOutButton } from './SignOutButton'

export function AuthorizedNav({ cartAccount }) {
  return (
    <RowBox gap="50px">
      <RowBox gap="20px">
        <CustomLink to="/">Каталог</CustomLink>
        <CustomLink to="tracking">Отследить заказ</CustomLink>
      </RowBox>

      <RowBox gap="20px">
        <OpenCartButton cartAccount={cartAccount} />
        <CustomLink to="orders">
          <HiOutlineUserCircle opacity={0.7} size={21} />
        </CustomLink>
        <CustomLink to="favorites">
          <BiBookmarkHeart opacity={0.8} size={21} />
        </CustomLink>
        <SignOutButton />
      </RowBox>
    </RowBox>
  )
}
