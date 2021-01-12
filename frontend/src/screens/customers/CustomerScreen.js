import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Button } from 'react-bootstrap'
import CustomerDisabledInfoForm from '../../components/customers/CustomerDisabledInfoForm'
import CustomerEditableForm from '../../components/customers/CustomerEditableForm'

function CustomerScreen({ match }) {
  const [loading, setLoading] = useState(true)
  const [customer, setCustomer] = useState({})
  const [editable, setEditable] = useState(false)

  useEffect(() => {
    async function fetchMyApi() {
      const url = 'http://localhost:3001/customers'
      const res = await fetch(url)
      const data = await res.json()
      setCustomer(
        data.find(function (p) {
          return p.id === match.params.id
        })
      )
      setLoading(false)
    }
    fetchMyApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // TODO: need to add fetch from json-server
  const handleChange = () => {
    setEditable(true)
  }

  return (
    <>
      <Link className='btn btn-light' to='/customers'>
        <i className='fas fa-long-arrow-alt-left' size='5x'></i>
      </Link>

      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <Row className='my-2'>
            <Col md={4}>
              <Card className='p-3 rounded'>
                <Card.Img src={customer.image} variant='top' />
                <Card.Body>
                  <Card.Title as='h5'>
                    <strong>
                      {customer.fName} {customer.lName}
                    </strong>
                  </Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    <i className='fas fa-map-marker-alt'></i>{' '}
                    {customer.addressCity}, {customer.addressProvince}
                  </Card.Subtitle>
                  <Card.Text>
                    <i className='fas fa-phone'></i> {customer.phoneNum}
                  </Card.Text>
                  <Button onClick={handleChange} variant='primary' size='sm'>
                    Ўзгартириш
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={8}>
              <Card className='p-3 rounded'>
                {editable ? (
                  <CustomerEditableForm match={match} />
                ) : (
                  <CustomerDisabledInfoForm match={match} />
                )}
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default CustomerScreen
