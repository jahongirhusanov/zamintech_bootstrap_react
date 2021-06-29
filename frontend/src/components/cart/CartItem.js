import React from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { CartContext } from '../../screens/CartPage/cart'

export default function CartItem({
  id,
  image,
  name,
  installmentPrice,
  amount,
}) {
  const { removeItem, increaseAmount, decreaseAmount } = 
  React.useContext(CartContext)

  var currencyFormatter = require('currency-formatter')

  function formatNumber(number) {
    number = Math.round(number)
    return currencyFormatter.format(number, { code: '' })
  }

  return (
    <article className='cart-item'>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        {/* <h5>${price}</h5> */}
        <h5>{`${formatNumber(installmentPrice)} сўм`}</h5>
        <button
          type='button'
          className='cart-btn remove-btn'
          onClick={() => removeItem(id)}
        >
          olib tashlash
        </button>
      </div>
      <div>
        <button
          type='button'
          className='cart-btn amount-btn'
          //   style={{ outline: "none" }}
          onClick={() => increaseAmount(id)}
        >
          <KeyboardArrowUpIcon />
        </button>
        <p className='item-amount'>{amount}</p>
        <button
          type='button'
          className='cart-btn amount-btn'
          //   style={{ outline: "none" }}
          onClick={() => decreaseAmount(id, amount)}
        >
          <KeyboardArrowDownIcon />
        </button>
      </div>
    </article>
  )
}
