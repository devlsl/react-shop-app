import styled from 'styled-components'
import { Checkbox } from '../components/UI/CheckBox'

const CheckBoxWrapper = styled.label`
  border: 2px solid #f3f3f3;
  border-radius: 40px;
  padding: 1rem;
  display: flex;

  &:hover {
    /* стили при наведении */
  }

  &:active {
    /* стили при нажатии */
  }

  &:has(input:checked) {
    /* стили при выборе */
  }
`

const Label = styled.label`
  border: 2px solid red;
`

const submitFormHandle = (e) => {
  e.preventDefault()
  const values = Array.from(e.target.elements)
    .filter((el) => el.type === 'checkbox')
    .filter((el) => el.checked)
    .map((el) => el.value)

  console.log(values)
}

export function Test() {
  return (
    <div className="border" style={{ width: '500px', height: '400px' }}>
      <form onSubmit={submitFormHandle}>
        <Checkbox Label={CheckBoxWrapper} checked={true} value="1">
          <div>Пицца</div>
        </Checkbox>
        <Checkbox Label={CheckBoxWrapper} checked={true} value="qwe">
          <div>Груша</div>
        </Checkbox>
        <div>sadsa</div>
        <input />
        <button type="submit">Заказать</button>
      </form>
    </div>
  )
}
