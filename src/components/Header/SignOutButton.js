import { VscSignOut } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { RowBox } from '../UI/RowBox'
import { NonBorderButton } from '../UI/NonBorderButton'

export function SignOutButton({ cartAccount }) {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  const onClick = () => {
    signOut(() => {
      window.localStorage.removeItem('user')
      navigate('/login', { replace: true })
    })
  }

  return (
    <NonBorderButton onClick={onClick}>
      <RowBox gap="4px">
        <VscSignOut opacity={0.7} size={21} />
      </RowBox>
    </NonBorderButton>
  )
}
