import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
import AddCustomerForm from '../../components/customers/AddCustomerForm'

function CustomerScreen({ match }) {
  return (
    <>
      <Link className='btn btn-light' to='/customers'>
        <i className='fas fa-long-arrow-alt-left' size='5x'></i>
      </Link>
      <Row className='my-2'>
        <Col md={12}>
          <Card className='p-3 rounded'>
            <AddCustomerForm />
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default CustomerScreen
