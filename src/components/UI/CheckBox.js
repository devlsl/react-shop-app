import { useState } from 'react'

export function Checkbox({ Label, children, checked, onChange, value }) {
  return (
    <Label>
      <input
        style={{ outline: 'none' }}
        type="checkbox"
        checked={checked}
        value={value}
        onChange={onChange}
      />
      {children}
    </Label>
  )
}
