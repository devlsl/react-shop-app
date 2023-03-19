import styled from 'styled-components'
import { Button } from '../components/UI/Button'
import { Checkbox } from '../components/UI/CheckBox'
import { useAuth } from '../hooks/useAuth'
import { randInt, randTrack } from '../utils/utils'
import { addOrder } from './addOrder'
import { generateUniqueTrackForUser } from './generateUniqueTrackForUser'
import { getOrders } from './getOrders'
import { isThereOrderById } from './isThereOrderById'
import { isThereOrderByTrack } from './isThereOrderByTrack'
import { setCart } from './setCart'
import { addToCart } from './addToCart'

export function Test() {
  const { user } = useAuth()

  const onCLick = async () => {
    // randInt randStr randTrack
    // const newCart = []
    // setCart('1', [])
    // addToCart('1', '1', 2)
  }

  return (
    <div style={{ width: '500px', height: '400px' }}>
      <Button style={{ margin: '30px' }} onClick={onCLick}>
        Test
      </Button>
    </div>
  )
}
