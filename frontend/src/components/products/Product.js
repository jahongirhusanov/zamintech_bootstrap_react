import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'react-bootstrap'
import Rating from './Rating'


function Product({ product }) {

  const defaultProfPic = 'https://dummyimage.com/640x510/6aebeb/000000.png&text=Maxsulot Rasmi Yoq'

  function chooseProfilePic(srcImg) {
    if (srcImg === '') {
      return defaultProfPic
    } else {
      return srcImg
    }
  }

  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/products/${product.id}`}>
        <Card.Img 
        src={chooseProfilePic(product.image)} 
        variant='top' 
        />
        
      </Link>
      <Card.Body>
        <Link to={`/products/${product.id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating value={product.rating} text={`${product.numReviews} шарҳ`} />
        </Card.Text>
        <Card.Text as='div'>
          <Row style={{ margin: '1rem 0.1rem 0rem 0.1rem' }}>
            <Col sm={5} className='px-0'>
              <p
                className='my-0'
                style={{ fontSize: '0.7rem', textAlign: 'left' }}
              >
                Нақд:
              </p>
            </Col>
            <Col className='px-0' sm={5} style={{ color: '#78C2AD' }}>
              {product.price}
            </Col>
            <Col className='px-0' sm={2}>
              <p className='currency my-0'>so'm</p>
            </Col>
            <Col className='px-0' sm={5}>
              <p
                className='my-0'
                style={{ fontSize: '0.7rem', textAlign: 'left' }}
              >
                Рассрочка:
              </p>
            </Col>
            <Col className='px-0' sm={5} style={{ color: '#78C2AD' }}>
              {product.installmentPrice}
            </Col>
            <Col className='px-0' sm={1}>
              <p className='currency my-0'>so'm</p>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
