import { useState } from 'react'
import { Input } from '../components/UI/Input'
import { itemQtyFilter } from '../utils/utils'

export function useQtyItemInput(initialValue = 1) {
  const [value, setValue] = useState(initialValue)

  const onChange = (e) => {
    setValue(itemQtyFilter(e.target.valueAsNumber, initialValue, 1, 9))
  }

  const CatalogItemInput = (
    <Input
      value={value}
      onChange={onChange}
      width="45px"
      type="number"
      min={1}
      max={10}
    />
  )

  return [value, CatalogItemInput]
}
