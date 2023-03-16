import { useAuth } from '../hooks/useAuth'
import { isThereUserById } from '../serverMethods/isThereUserById'

export function CheckUserInStorage({ children }) {
  const { user, setUser } = useAuth()
  const userStorage = window.localStorage.getItem('user')

  const setUserFromStorage = async () => {
    const isThere = await isThereUserById(userStorage)
    if (isThere) {
      setUser(userStorage)
    }
  }

  if (userStorage && !user) {
    setUserFromStorage()
  }

  return children
}
