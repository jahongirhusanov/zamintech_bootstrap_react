import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
import AddContractForm from '../../components/contracts/AddContractForm'

function AddContractScreen() {
  return (
    <>
      <Link className='btn btn-light' to='/customers'>
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
