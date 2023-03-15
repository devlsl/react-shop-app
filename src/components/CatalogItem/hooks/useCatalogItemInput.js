import { useState } from 'react'
import { catalogItemQtyFilter } from '../../../utils/utils'
import { Input } from '../../UI/Input'

export function useCatalogItemInput(initialValue = 1) {
  const [value, setValue] = useState(initialValue)

  // может отличаться
  const onChange = (e) => {
    setValue(catalogItemQtyFilter(e.target.valueAsNumber, initialValue, 1, 9))
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
