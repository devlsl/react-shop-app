import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Loginpage } from '../pages/Loginpage'

export function ToLoginPage() {
  const location = useLocation()
  const fromPage = location.state?.from?.pathname || '/'

  const { user } = useAuth()

  return user ? <Navigate to={fromPage} /> : <Loginpage />
}
