import { useContext } from 'react'
import { TempCartContext } from '../hoc/TempCartProvider'

export function useTempCart() {
  return useContext(TempCartContext)
}
