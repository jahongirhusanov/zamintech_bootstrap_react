import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Button } from 'react-bootstrap'

const ContractCustomerCard = ({ match }) => {
  const [loading, setLoading] = useState(true)
  const [contract, setContract] = useState({})

  useEffect(() => {
    async function fetchMyApi() {
      const url = 'http://localhost:3001/contracts'
      const res = await fetch(url)
      const data = await res.json()
      setContract(
        data.find(function (p) {
          return p.id === match.params.id
        })
      )
      setLoading(false)
    }
    fetchMyApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <Card className='p-3 rounded' style={{ height: '100%' }}>
            <Row>
              <Col md={12}>
                <Card.Img
                  src={contract.customer.image}
                  variant='top'
                  style={{
                    borderRadius: '50%',
                    height: '7rem',
                    width: '7rem',
                    display: 'block',
                    margin: 'auto',
                  }}
                />
              </Col>
            </Row>
            <Card.Body style={{ padding: '1rem 0.6rem', lineHeight: 2 }}>
              <Card.Title
                style={{
                  fontSize: '1.2rem',
                  textAlign: 'center',
                  color: '#78c2ad',
                }}
              >
                {contract.customer.fName} {contract.customer.lName}
              </Card.Title>
              <Card.Subtitle
                className='mb-1 text-muted'
                style={{ fontSize: '1rem' }}
              >
                <i className='fas fa-map-marker-alt'></i>{' '}
                {contract.customer.addressCity},{' '}
                {contract.customer.addressProvince}
              </Card.Subtitle>
              <Card.Text style={{ fontSize: '1rem' }}>
                <i className='fas fa-phone'></i> {contract.customer.phoneNum}
              </Card.Text>
              <Link to={`/contracts/${contract.id}/payments`}>
                <Button variant='primary' size='sm'>
                  Тўлов
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </>
      )}
    </>
  )
}

export default ContractCustomerCard
