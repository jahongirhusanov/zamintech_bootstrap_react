import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
export default function EmptyCart() {
  return (
    <section className='empty-cart section'>
      <h2>siz hali hech nima harid qilmadingiz ...</h2> <br />
      <Link to='/products'>
        <Button variant='primary'>Mahsulotlarga O'tish</Button>{' '}
      </Link>
    </section>
  )
}
