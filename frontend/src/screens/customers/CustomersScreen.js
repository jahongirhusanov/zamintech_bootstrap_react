import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Customer from '../../components/customers/Customer'
import { Link } from 'react-router-dom'

function CustomersScreen() {
  const [state, setState] = useState({
    loading: true,
    customerList: null,
  })

  useEffect(() => {
    async function fetchMyApi() {
      const url = 'http://localhost:3001/customers'
      const res = await fetch(url)
      const data = await res.json()
      setState({
        customerList: data,
        loading: false,
      })
    }
    fetchMyApi()
  }, [])

  return (
    <>
      <Row sm={0} md={4}>
        <Col md={3}>
          <h1 className='screenTitle'>Мижозлар</h1>
          <Link to='/customer-add'>
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
            {state.customerList.map((customer) => (
              <Col key={customer.id} sm={12} md={6} lg={4} xl={3}>
                <Customer customer={customer} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  )
}

export default CustomersScreen
