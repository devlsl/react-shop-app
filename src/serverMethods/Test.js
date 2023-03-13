import { useEffect } from 'react'
import { addToFavorites } from './addToFavorites'
import { deleteFromFavorites } from './deleteFromFavorites'
import { getFavorites } from './getFavorites'
import { isThereItemInFavorites } from './isThereItemInFavorites'
import { toggleToFavorites } from './toggleToFavorites'

export function Test() {
  const testing = async () => {
    // isThereItemInFavorites
    // console.log('expected true', await isThereItemInFavorites('3', '2'))
    // console.log('expected false', await isThereItemInFavorites('3', '100'))
    // console.log('expected false', await isThereItemInFavorites('123', '2'))
    // addToFavorites
    // console.log(await getFavorites('3'))
    // await addToFavorites('3', '4')
    // console.log(await getFavorites('3'))
    // deleteFromFavorites
    // console.log(await getFavorites('3'))
    // await deleteFromFavorites('3', '4')
    // console.log(await getFavorites('3'))
    // toggleToFavorites
    console.log(await getFavorites('3'))
    await toggleToFavorites('3', '4')
    console.log(await getFavorites('3'))
    // await toggleToFavorites('3', '4')
    // console.log(await getFavorites('3'))
  }

  return (
    <div
      onClick={testing}
      style={{
        maxWidth: '100px',
        maxHeight: '50px',
        backgroundColor: 'orange',
        border: '2px solid black',
        textAlign: 'center',
        cursor: 'pointer',
        margin: '5px',
        padding: '5px',
        fontSize: '20px',
        fontWeight: '600'
      }}
    >
      TEST
    </div>
  )
}
