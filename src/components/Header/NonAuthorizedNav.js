import { RowBox } from '../UI/RowBox'
import { CustomLink } from './CustomLink'

export function NonAuthorizedNav() {
  return (
    <RowBox gap="30px">
      <CustomLink to="/">Каталог</CustomLink>
      <CustomLink to="login">Авторизация</CustomLink>
    </RowBox>
  )
}
