import { useState } from 'react'
import { createContext } from 'react'
import { checkUser } from '../serverMethods/checkUser'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const signIn = async ({ phone, password }) => {
    const checkedUser = await checkUser(phone, password)
    setUser(checkedUser)
    window.localStorage.setItem('user', checkedUser)
  }

  const signOut = (cb) => {
    setUser(null)
    cb()
  }

  const value = { user, setUser, signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
