import { useAuth } from '../../hooks/useAuth'
import { useCart } from '../../hooks/useCart'
import { useTempCart } from '../../hooks/useTempCart'
import { addOrder } from '../../serverMethods/addOrder'
import { setCart } from '../../serverMethods/setCart'

const submitFormHandle = (event, user, tempCart, tempCartPrice, closeCart) => {
  event.preventDefault()
  closeCart()

  const orderItems = tempCart
    .filter((item) => item.checked)
    .map(({ checked, ...item }) => item)
  const orderAmount = tempCartPrice

  addOrder(user, orderItems, orderAmount)

  const cartItems = tempCart
    .filter((item) => !item.checked)
    .map(({ checked, ...item }) => item)

  setCart(user, cartItems)
}

export function CartForm({ children }) {
  const { tempCart, tempCartPrice } = useTempCart()
  const { closeCart } = useCart()
  const { user } = useAuth()

  return (
    <form
      onSubmit={(event) =>
        submitFormHandle(event, user, tempCart, tempCartPrice, closeCart)
      }
    >
      {children}
    </form>
  )
}
