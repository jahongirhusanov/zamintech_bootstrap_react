import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
import AddContractForm from '../../components/contracts/AddContractForm'
import AddContractCustomerForm from '../../components/contracts/AddContractCustomerForm'

function AddContractScreen() {
  return (
    <>
      <Link className='btn btn-light' to='/contracts'>
        <i className='fas fa-long-arrow-alt-left' size='5x'></i>
      </Link>
      <Row className='my-2'>
        <Col md={12}>
          <Card className='p-3 rounded'>
            <AddContractForm />
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default AddContractScreen
