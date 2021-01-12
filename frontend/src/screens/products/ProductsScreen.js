import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Product from '../../components/products/Product'
import { Link } from 'react-router-dom'

function ProductsScreen() {
  const [state, setState] = useState({
    loading: true,
    prod: null,
  })

  // useEffect(async () => {
  //   const url = 'http://localhost:3001/products'
  //   const res = await fetch(url)
  //   const data = await res.json()
  //   setState({
  //     prod: data,
  //     loading: false,
  //   })
  // }, [])

  useEffect(() => {
    async function fetchMyApi() {
      const url = 'http://localhost:3001/products'
      const res = await fetch(url)
      const data = await res.json()
      setState({
        prod: data,
        loading: false,
      })
    }
    fetchMyApi()
  }, [])

  return (
    <>
      <Row sm={0} md={4}>
        <Col md={3}>
          <h1 className='screenTitle'>Махсулотлар</h1>
          <Link to='/products-add'>
            <Button size='sm' className='btn btn-primary addButton'>
              <i className='fas fa-plus-circle'></i>
            </Button>{' '}
          </Link>
        </Col>
      </Row>

      {state.loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <Row>
            {state.prod.map((product) => (
              <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  )
}

export default ProductsScreen
