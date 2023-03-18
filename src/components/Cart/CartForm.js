const submitFormHandle = (e) => {
  e.preventDefault()
  const values = Array.from(e.target.elements)
    .filter((el) => el.type === 'checkbox')
    .filter((el) => el.checked)
    .map((el) => el.value)
}

export function CartForm({ children }) {
  return <form onSubmit={submitFormHandle}>{children}</form>
}
