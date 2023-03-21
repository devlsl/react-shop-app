import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getItem } from '../../serverMethods/getItem'
import { ColBox } from '../UI/ColBox'
import { RowBox } from '../UI/RowBox'

export function OrderItem(props) {
  const { id, qty } = props.item
  const [item, setItem] = useState({})
  useEffect(() => {
    getItem(id).then(setItem)
  }, [])

  return (
    <>
      {item && (
        <RowBox
          className="border"
          width="100%"
          padding="20px"
          justify="start"
          gap="20px"
          style={{ border: '2px solid #f3f3f3', borderRadius: '10px' }}
        >
          <RowBox gap="1px" style={{ fontWeight: '400', fontSize: '14px' }}>
            <div>{qty}</div>
            <div>x</div>
          </RowBox>
          <Link to={`/${id}`}>
            <img src={item.img} alt="item" width="70px" />
          </Link>
          <ColBox align="start" gap="10px">
            <ColBox align="start" gap="4px">
              <div>{item.title}</div>
              <div>
                <b>Цена: </b>
                {parseInt(item.price).toLocaleString()} руб.
              </div>
            </ColBox>
          </ColBox>
        </RowBox>
      )}
    </>
  )
}
