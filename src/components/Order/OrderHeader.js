import { useOrder } from '../../hooks/useOrder'
import { ColBox } from '../UI/ColBox'
import { RowBox } from '../UI/RowBox'
import { StyledHeading } from './StyledHeading'
import { StyledStatus } from './StyledStatus'
import { StyledDate } from './StyledDate'
import { useAuth } from '../../hooks/useAuth'
import { getOrderStatusById } from '../../serverMethods/getOrderStatusById'
import { useEffect, useState } from 'react'
import { changeOrderStatus } from '../../serverMethods/changeOrderStatus'

export function OrderHeader() {
  const { id, date, status, track } = useOrder()
  const { user } = useAuth()

  const [updatedStatus, setUpdatedStatus] = useState(status)
  const [statusTrigger, setStatusTrigger] = useState(false)
  const statusHasUpdated = () => setStatusTrigger((prev) => !prev)

  useEffect(() => {
    console.log(updatedStatus)
  }, [updatedStatus])

  const localeDate = new Date(+date).toLocaleString()

  const hardChangeOrderStatus = async () => {
    await changeOrderStatus(user, id)
    statusHasUpdated()
  }

  useEffect(() => {
    getOrderStatusById(user, id).then(setUpdatedStatus)
  }, [statusTrigger])

  return (
    <ColBox width="100%" gap="3px">
      <RowBox width="100%">
        <StyledHeading>Заказ #{track}</StyledHeading>
        <StyledStatus onClick={hardChangeOrderStatus} status={updatedStatus}>
          {updatedStatus}
        </StyledStatus>
      </RowBox>
      <StyledDate>{localeDate}</StyledDate>
    </ColBox>
  )
}
