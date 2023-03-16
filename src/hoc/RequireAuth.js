import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function RequireAuth({ children }) {
  const location = useLocation()

  const { user } = useAuth()

  return user ? children : <Navigate to="/login" state={{ from: location }} />
}
