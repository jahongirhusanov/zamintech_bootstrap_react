import React from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  Button,
  Row,
  Col,
  CardDeck,
  ProgressBar,
  Alert,
} from 'react-bootstrap'

function Contract({ contract }) {
  function dateDiffInDays(date1, date2) {
    // round to the nearest whole number
    date1 = JSON.stringify(date1)
    date1 = date1.slice(1, 11)
    date2 = JSON.stringify(date2)
    date2 = date2.slice(1, 11)
    console.log(date1)
    console.log(date2)
    // var Difference_In_Time = date2.getTime() - date1.getTime()
    // var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)
    // return Difference_In_Days
    return Math.round((date2 - date1) / (1000 * 60 * 60 * 24))
  }

  // var date1 = new Date('06/30/2019')
  // var date2 = new Date('07/30/2019')
  // // To calculate the time difference of two dates
  // var Difference_In_Time = date2.getTime() - date1.getTime()
  // // To calculate the no. of days between two dates
  // var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)

  // function getDifferenceInDays(date1, date2) {
  //   const diffInMs = Math.abs(date2 - date1);
  //   return diffInMs / (1000 * 60 * 60 * 24);
  // }

  // {contract.nextPaymentDate}

  // const start = moment('2011-04-15', 'YYYY-MM-DD')
  // const end = moment('2011-11-27', 'YYYY-MM-DD')
  // const range = moment.range('2011-04-15', '2011-11-27')
  var currencyFormatter = require('currency-formatter')
  function formatNumber(number) {
    number = Math.round(number)
    return currencyFormatter.format(number, { code: '' })
  }

  return (
    <CardDeck>
      <Card className='rounded'>
        <Card.Body>
          <Col>
            {/* Contract Number */}
            <Row>
              <Col>
                <Link to={`/contracts/${contract.id}`}>
                  <Card.Title as='h5'>
                    <i className='fas fa-file-contract'></i>{' '}
                    {contract.contractNum}
                  </Card.Title>
                </Link>
              </Col>
            </Row>

            {/* Customer Full Name */}
            <Row>
              <Col style={{ paddingRight: 0, paddingBottom: '0.5rem' }}>
                <Card.Subtitle
                  style={{
                    color: '#78C2AD',
                    fontSize: '1.2rem',
                    fontWeight: '900',
                    textAlign: 'center',
                    marginBottom: '0.7rem',
                  }}
                >
                  {contract.customer.fName}
                </Card.Subtitle>
                <Card.Subtitle
                  style={{
                    color: '#78C2AD',
                    fontSize: '1.2rem',
                    fontWeight: '900',
                    textAlign: 'center',
                  }}
                >
                  {contract.customer.lName}
                </Card.Subtitle>
              </Col>
            </Row>

            {/* PaymentDate */}
            <Row>
              <Col sm={6} style={{ paddingRight: 0, paddingBottom: '0.5rem' }}>
                <Card.Text
                  as='p'
                  style={{ color: '#78C2AD', fontSize: '1rem' }}
                >
                  Тўлов Куни:
                </Card.Text>
              </Col>
              <Col sm={6} style={{ paddingRight: 0 }}>
                <Card.Text as='p'>{contract.nextPaymentDate}</Card.Text>
              </Col>
            </Row>

            {/* Amount */}
            <Row>
              <Col sm={6} style={{ paddingRight: 0, paddingBottom: '0.5rem' }}>
                <Card.Text
                  as='p'
                  style={{ color: '#78C2AD', fontSize: '1rem' }}
                >
                  Миқдори:
                </Card.Text>
              </Col>
              <Col sm={6} style={{ paddingRight: 0 }}>
                <Card.Text as='p'>
                  {formatNumber(contract.nextPaymentAmount)}
                </Card.Text>
              </Col>
            </Row>

            {/* Status */}
            <Row>
              <Col sm={6} style={{ paddingRight: 0, paddingBottom: '0.5rem' }}>
                <Card.Text
                  as='p'
                  style={{ color: '#78C2AD', fontSize: '1rem' }}
                >
                  Статус:
                </Card.Text>
              </Col>
              <Col sm={6} style={{ paddingRight: 0 }}>
                <Alert
                  variant='success'
                  style={{
                    padding: '0rem',
                    fontSize: '0.8rem',
                    textAlign: 'center',
                  }}
                >
                  {/* {dateDiffInDays('2020-12-15', contract.nextPaymentDate)} */}
                  xx кун қолди
                </Alert>
              </Col>
            </Row>

            {/* Status */}
            <Row>
              <Col sm={6} style={{ paddingRight: 0, paddingBottom: '0.5rem' }}>
                <Card.Text
                  as='p'
                  style={{ color: '#78C2AD', fontSize: '1rem' }}
                >
                  Мудат:
                </Card.Text>
              </Col>
              <Col sm={6} style={{ paddingRight: 0 }}>
                <ProgressBar>
                  <ProgressBar
                    striped
                    variant='success'
                    now={contract.currentTermNumber}
                    key={1}
                    max={contract.contractTermsInMonths}
                    label={`${contract.currentTermNumber}`}
                  />
                  <ProgressBar
                    variant='warning'
                    now={contract.contractTermsInMonths}
                    key={2}
                    max={contract.contractTermsInMonths}
                    label={`${contract.contractTermsInMonths}`}
                  />
                </ProgressBar>
              </Col>
            </Row>

            {/* Buttons */}
            <Row style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <Col sm={6}>
                <Link to={`/contracts/${contract.id}`}>
                  <Button variant='primary' size='sm'>
                    Батафсил
                  </Button>
                </Link>
              </Col>
              <Col sm={6}>
                <Link to={`/contracts/${contract.id}/payments`}>
                  <Button variant='primary' size='sm'>
                    Тўлов
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Card.Body>
      </Card>
    </CardDeck>
  )
}

export default Contract
