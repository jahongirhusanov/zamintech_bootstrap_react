import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import productsApi from '../../api/products'
import 'react-widgets/dist/css/react-widgets.css'
import Axios from 'axios'
import InputWithLabel from '../general/form/InputWithLabel'
import InputDropdown from '../general/form/InputDropdown'
import InputDateAge from '../general/form/InputDateAge'
import InputDateMinToday from '../general/form/InputDateMinToday'
import InputDateMaxToday from '../general/form/InputDateMaxToday'
import defaultProductPic from '../../images/products/productImage.png'
import './addproductform.scss'

function AddCustomerForm() {
  const url = 'http://localhost:3001/products/'

  // const [loading, setLoading] = useState(true)
  const [supplierList, setSupplierList] = useState([])

  // const supplierList = productsApi.suppliers.names
  const brandList = productsApi.brand.names
  const categoryList = productsApi.category.names

  // const defaultProductPic = '../../images/products/productImage.png'
  useEffect(() => {
    async function fetchMyApi() {
      const url = 'http://localhost:3001/suppliers'
      const res = await fetch(url)
      const data = await res.json()
      console.log(data[0].name)
      setSupplierList(data)
      // setSupplierList(
      //   data.find(function (p) {
      //     return p.id === match.params.id
      //   })
      // )
      // setLoading(false)
    }
    fetchMyApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [data, setData] = useState({
    id: '',
    name: '',
    supplier: '',
    description: '',
    brand: '',
    category: '',
    buyPrice: '',
    price: '',
    installmentPrice: '',
    countInStock: '',
    image: '',
    rating: 0,
    numReviews: 0,
  })

  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false)

  function submitHandler(e) {
    e.preventDefault()
    Axios.post(url, data).then((res) => {
      console.log(res.status)
      if (res.status === 201) {
        setIsSuccessfullySubmitted(true)
      }
    })
  }

  function inputHandler(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <Col>
        <Row>
          <Col md={6}>
            <InputWithLabel
              required
              htmlFor='name'
              label='Махсулот Номи'
              placeholder='Махсулот Номи'
              type='text'
              name='name'
              id='name'
              value={data.name}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>
          <Col md={6}>
            <InputDropdown
              required
              htmlFor='supplier'
              label='Таъминотчи'
              placeholder='Таъминотчи'
              name='supplier'
              id='supplier'
              value={data.supplier}
              onChange={(e) => inputHandler(e)}
              items={supplierList}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
            <InputDropdown
              required
              htmlFor='brand'
              label='Махсулот Марка'
              placeholder='Махсулот Марка'
              name='brand'
              id='brand'
              value={data.brand}
              onChange={(e) => inputHandler(e)}
              items={brandList}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
            <InputDropdown
              required
              htmlFor='category'
              label='Махсулот Тоифаси'
              placeholder='Махсулот Тоифаси'
              name='category'
              id='category'
              value={data.category}
              onChange={(e) => inputHandler(e)}
              items={categoryList}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
            <InputWithLabel
              htmlFor='buyPrice'
              label='Сотиб Олиш Нархи'
              placeholder='0,00 сўм'
              type='number'
              name='buyPrice'
              id='buyPrice'
              min='100'
              max='99999999'
              value={data.buyPrice}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
            <InputWithLabel
              htmlFor='profitPercentage'
              label='Фойда %'
              placeholder='Фойда %'
              type='number'
              name='profitPercentage'
              id='profitPercentage'
              min='1'
              max='99'
              // value={data.price}
              // onChange={(e) => inputHandler(e)}
              disabled
            />
          </Col>

          <Col md={6}>
            <InputWithLabel
              htmlFor='price'
              label='Нақдга Сотиш Нархи'
              placeholder='0,00 сўм'
              type='number'
              name='price'
              id='price'
              min='100'
              max='99999999'
              value={data.price}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
            <InputWithLabel
              htmlFor='installmentPrice'
              label='Рассрочка Сотиш Нархи'
              placeholder='0,00 сўм'
              type='number'
              name='installmentPrice'
              id='installmentPrice'
              min='100'
              max='99999999'
              value={data.installmentPrice}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
            <InputWithLabel
              htmlFor='countInStock'
              label='Нечта Сотиб Олинди'
              placeholder='0 дона'
              type='number'
              name='countInStock'
              id='countInStock'
              min='0'
              max='99999'
              value={data.countInStock}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
            <InputWithLabel
              htmlFor='image'
              label='Расм'
              placeholder='Расм'
              type='file'
              name='image'
              accept='image/*,.pdf'
              id='image'
              value={data.image}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={12}>
            <InputWithLabel
              htmlFor='description'
              label='Изоҳ'
              placeholder='Изоҳ'
              type='text'
              name='description'
              id='description'
              value={data.description}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          {!isSuccessfullySubmitted && (
            <Col md={12} className='text-center'>
              <button type='submit' className='btn btn-primary'>
                ҚЎШИШ
              </button>
            </Col>
          )}

          {isSuccessfullySubmitted && (
            <Col md={12} className='success'>
              муваффақиятли қўшилди
            </Col>
          )}
        </Row>
      </Col>
    </form>
  )
}

export default AddCustomerForm
