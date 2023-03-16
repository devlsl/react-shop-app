import { useState } from 'react'

export function Checkbox({ Label, children, checked = false, value }) {
  const [isChecked, setChecked] = useState(checked)
  return (
    <Label>
      <input
        type="checkbox"
        checked={isChecked}
        value={value}
        onChange={() => setChecked((prev) => !prev)}
      />
      {children}
    </Label>
  )
}
