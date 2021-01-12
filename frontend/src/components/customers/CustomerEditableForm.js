import React, { useState, useEffect } from 'react'
import { Form, Col, Button } from 'react-bootstrap'

function CustomerEditableForm({ match }) {
  const [loading, setLoading] = useState(true)
  const [customer, setCustomer] = useState({})

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
              />
            </Col>
            <Form.Label column='sm' lg={2}>
              Туғилган Сана:
            </Form.Label>
            <Col>
              <Form.Control size='sm' type='text' defaultValue={customer.dob} />
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
              />
            </Col>
            <Form.Label column='sm' lg={2}>
              Маоши:
            </Form.Label>
            <Col>
              <Form.Control
                size='sm'
                type='text'
                defaultValue={customer.salary}
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
              />
            </Col>
          </Form.Row>

          <Form.Row
            style={{
              marginTop: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button variant='primary' type='submit'>
              Тасдиқлаш
            </Button>
          </Form.Row>
        </Form>
      )}
    </>
  )
}

export default CustomerEditableForm
