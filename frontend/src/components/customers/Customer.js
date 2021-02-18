import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
// import defaultProfPic from '../../images/customers/profile1.jpg'
import './customer.scss'

function Customer({ customer }) {
  // const isImageEmpty = false
  const defaultProfPic = '../../images/customers/profile1.jpg'

  function chooseProfilePic(srcImg) {
    if (srcImg === '') {
      return defaultProfPic
    } else {
      return srcImg
    }
  }

  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/customer/${customer.id}`}>
        {/* <Card.Img src={customer.image} variant='top' className='customerImg' /> */}
        <div className='icon-image'>
          <Card.Img
            src={chooseProfilePic(customer.image)}
            variant='top'
            className='customerImg'
          />
          {customer.inBlackList ? (
            <div className='top-left'>
              <i className='fas fa-user-secret black-list' />
            </div>
          ) : null}
        </div>
      </Link>
      <Card.Body>
        <Link to={`/customer/${customer.id}`}>
          <Card.Title
            as='h6'
            className='text-center'
            style={{ marginBottom: '0.2rem' }}
          >
            <strong>{customer.fName}</strong>
          </Card.Title>
          <Card.Title as='h6' className='text-center'>
            <strong>{customer.lName}</strong>
          </Card.Title>
        </Link>
        <Card.Subtitle className='mb-2 text-center text-muted'>
          {customer.position}
        </Card.Subtitle>
        <Card.Text as='p' className='customerAddress'>
          {customer.addressStreet}, {customer.addressCity},{' '}
          {customer.addressProvince}
        </Card.Text>
        <Card.Text as='h5'>{customer.phoneNum}</Card.Text>
        <Card.Text as='h5'>{customer.phoneNum2}</Card.Text>
        <Link to={`/customer/${customer.id}`}>
          <Button variant='primary' size='sm'>
            Батафсил
          </Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Customer
