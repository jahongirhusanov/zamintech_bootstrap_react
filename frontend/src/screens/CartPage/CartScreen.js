import React from 'react'
import EmptyCart from '../../components/cart/EmptyCart'
import { CartContext } from './cart'
import CartItem from '../../components/cart/CartItem'
import { Link } from 'react-router-dom'

export default function CartScreen() {
  let user = true
  const { cart, subTotal } = React.useContext(CartContext)
  if (cart.length === 0) {
    return <EmptyCart />
  }
  return (
    <section className='cart-items section'>
      <h2>siz harid qilgan mahsulotlar</h2>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <h2>total : $ {subTotal}</h2>
      {user ? (
        <Link to='/contract-add' className='btn btn-outline-primary btn-block'>
          Шартнома Тузиш - <i className='fas fa-file-signature'></i>
        </Link>
      ) : (
        <Link to='/login' className='btn btn-outline-primary btn-block'>
          LOGIN
        </Link>
      )}
    </section>
  )
}
