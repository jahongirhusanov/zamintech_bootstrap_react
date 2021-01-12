import React, { useState, useEffect } from 'react'
import { Col, Form } from 'react-bootstrap'

function CustomerDisabledInfoForm({ match }) {
  const [loading, setLoading] = useState(true)
  const [customer, setCustomer] = useState({})
  var currencyFormatter = require('currency-formatter')

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

  function formatNumber(number) {
    number = Math.round(number)
    return currencyFormatter.format(number, { code: '' })
  }

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <Form>
          <Form.Row>
            <Form.Label column='sm' lg={2}>
              Исм:
            </Form.Label>
            <Col>
              <Form.Control
                size='sm'
                type='text'
                defaultValue={customer.fName}
                disabled
              />
            </Col>
            <Form.Label column='sm' lg={2}>
              Фамилия:
            </Form.Label>
            <Col>
              <Form.Control
                size='sm'
                type='text'
                defaultValue={customer.lName}
                disabled
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Label column='sm' lg={2}>
              Шарифи:
            </Form.Label>
            <Col>
              <Form.Control
                size='sm'
                type='text'
                defaultValue={customer.mName}
                disabled
              />
            </Col>
            <Form.Label column='sm' lg={2}>
              Туғилган Сана:
            </Form.Label>
            <Col>
              <Form.Control
                size='sm'
                type='text'
                defaultValue={customer.dob}
                disabled
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Label column='sm' lg={2}>
              Туғилган Жойи:
            </Form.Label>
            <Col>
              <Form.Control
                size='sm'
                type='text'
                defaultValue={customer.cityBorn}
                disabled
              />
            </Col>
            <Form.Label column='sm' lg={2}>
              Паспорт #:
            </Form.Label>
            <Col>
              <Form.Control
                size='sm'
                type='text'
                defaultValue={customer.pasportNum}
                disabled
              />
            </Col>
          </Form.Row>

          <br />
          <Form.Row>
            <Form.Label column='sm' lg={2}>
              Ким Томонидан Берилган:
            </Form.Label>
            <Col>
              <Form.Control
                size='sm'
                type='text'
                defaultValue={customer.pasportIssuedBy}
                disabled
              />
            </Col>
            <Form.Label column='sm' lg={2}>
              Берилган Сана:
            </Form.Label>
            <Col>
              <Form.Control
                size='sm'
                type='text'
                defaultValue={customer.pasportIssuedAt}
                disabled
              />
            </Col>
          </Form.Row>

          <br />
          <Form.Row>
            <Form.Label column='sm' lg={2}>
              Амал Қилиш Муддати:
            </Form.Label>
            <Col>
              <Form.Control
                size='sm'
                type='text'
                defaultValue={customer.pasportExpAt}
                disabled
              />
            </Col>
            <Form.Label column='sm' lg={2}>
              Кўча Номи:
            </Form.Label>
            <Col>
              <Form.Control
                size='sm'
                type='text'
                defaultValue={customer.addressStreet}
                disabled
              />
            </Col>
          </Form.Row>

          <br />
          <Form.Row>
            <Form.Label column='sm' lg={2}>
              Туман:
            </Form.Label>
            <Col>
              <Form.Control
                size='sm'
                type='text'
                defaultValue={customer.addressCity}
                disabled
              />
            </Col>
            <Form.Label column='sm' lg={2}>
              Вилоят:
            </Form.Label>
            <Col>
              <Form.Control
                size='sm'
                type='text'
                defaultValue={customer.addressProvince}
                disabled
              />
            </Col>
          </Form.Row>

          <br />
          <Form.Row>
            <Form.Label column='sm' lg={2}>
              Почта Индехи:
            </Form.Label>
            <Col>
              <Form.Control
                size='sm'
                type='text'
                defaultValue={customer.addressZIP}
                disabled
              />
            </Col>
            <Form.Label column='sm' lg={2}>
              Телефон #:
            </Form.Label>
            <Col>
              <Form.Control
                size='sm'
                type='text'
                defaultValue={customer.phoneNum}
                disabled
              />
            </Col>
          </Form.Row>

          <br />
          <Form.Row>
            <Form.Label column='sm' lg={2}>
              Email:
            </Form.Label>
            <Col>
              <Form.Control
                size='sm'
                type='text'
                defaultValue={customer.email}
                disabled
              />
            </Col>
            <Form.Label column='sm' lg={2}>
              Лавозим:
            </Form.Label>
            <Col>
              <Form.Control
                size='sm'
                type='text'
                defaultValue={customer.position}
                disabled
              />
            </Col>
          </Form.Row>

          <br />
          <Form.Row>
            <Form.Label column='sm' lg={2}>
              Иш Жойи:
            </Form.Label>
            <Col>
              <Form.Control
                size='sm'
                type='text'
                defaultValue={customer.workAt}
                disabled
              />
            </Col>
            <Form.Label column='sm' lg={2}>
              Маоши:
            </Form.Label>
            <Col>
              <Form.Control
                size='sm'
                type='text'
                defaultValue={`${formatNumber(customer.salary)} сўм`}
                disabled
              />
            </Col>
          </Form.Row>

          <br />
          <Form.Row>
            <Form.Label column='sm' lg={2}>
              Rating:
            </Form.Label>
            <Col>
              <Form.Control
                size='sm'
                type='text'
                defaultValue={customer.rating}
                disabled
              />
            </Col>
            <Form.Label column='sm' lg={2}>
              Изоҳ:
            </Form.Label>
            <Col>
              <Form.Control
                size='sm'
                type='text'
                defaultValue={customer.description}
                disabled
              />
            </Col>
          </Form.Row>
        </Form>
      )}
    </>
  )
}

export default CustomerDisabledInfoForm
