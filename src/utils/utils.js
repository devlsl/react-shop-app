export function removeDuplicates(arr) {
  return [...new Set(arr)]
}

export function rangeFilter(num, lower, upper) {
  return num > upper ? upper : num < lower ? lower : num
}

export function itemQtyFilter(qty, defaultQty, lower, upper) {
  if (!qty) {
    return defaultQty
  }

  const qtyLastDigit = qty % 10

  return qtyLastDigit > upper
    ? qtyLastDigit
    : qtyLastDigit < lower
    ? lower
    : qtyLastDigit
}

// export function cartItemQtyFilter(qty, defaultQty, lower, upper) {
//   if (!qty) {
//     return defaultQty
//   }

//   const qtyLastDigit = qty % 10

//   return qtyLastDigit > upper
//     ? qtyLastDigit
//     : qtyLastDigit < lower
//     ? lower
//     : qtyLastDigit
// }

export function cssJustify(prop) {
  switch (prop) {
    case 'between':
      return 'space-between'
    case 'evenly':
      return 'space-evenly'
    case 'around':
      return 'space-around'
    case 'center':
      return 'center'
    case 'start':
      return 'flex-start'
    case 'end':
      return 'flex-end'
    default:
      return 'space-between'
  }
}
