import React, { useState, useEffect } from 'react'
import { Form, Table, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../screens/CartPage/cart'
import ContractItem from './ContractItem'
import InputDropdown from '../general/form/InputDropdown'
import AddContractCustomer from '../../screens/contracts/AddContractScreen'

function AddContractCustomerForm({ match }) {
  const { cart, subTotal } = React.useContext(CartContext)
  const [loading, setLoading] = useState(true)
  const [contract, setContract] = useState({})
  const bankNames = ['Xalq', 'Turon', 'Agro', 'Milliy', 'Zamin Tech']
  var currencyFormatter = require('currency-formatter')

  const [data, setData] = useState({
    bank: '',
  })

  function inputHandler(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
  }
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
      // setLoading(false);
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
      <div>
        <AddContractCustomer />
      </div>
      <div className='customer-form mt-5'>
        <Form>
          <Form.Label>
            <h2>Xarid Qilingan Mahsulotlar</h2>
          </Form.Label>
          <Table>
            <thead>
              <tr>
                <td></td>
              </tr>
              <Form.Group>
                <Form.Row>
                  <Col xs={6}>
                    <Form.Label>
                      <b>MAHSULOT</b>
                    </Form.Label>{' '}
                    <br />
                  </Col>
                  <Col style={{ textAlign: 'center' }}>
                    <Form.Label>
                      <b>MIQDORI</b>
                    </Form.Label>{' '}
                    <br />
                  </Col>
                  <Col>
                    <Form.Label>
                      <b>NARXI</b>
                    </Form.Label>{' '}
                    <br />
                  </Col>
                  <Col>
                    <Form.Label>
                      <b>UMUMIY SUMMASI</b>
                    </Form.Label>{' '}
                    <br />
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    {cart.map((item) => {
                      return <ContractItem key={item.id} {...item} />
                    })}
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col xs={3}>
                    <Link to='/products'>
                      <button type='button' className='btn btn-primary'>
                        Mahsulot Qo'shish
                      </button>
                    </Link>
                  </Col>
                </Form.Row>
              </Form.Group>
            </thead>
            <hr />
            <Form.Row>
              <Col>
                <Table
                  size='sm'
                  style={{
                    fontSize: '1rem',
                    width: '40%',
                    marginLeft: 'auto',
                    textAlign: 'left',
                    marginRight: '0px',
                    alignItems: 'center',
                  }}
                >
                  <thead>
                    {/* umumiy summa */}
                    <tr>
                      <th>
                        <h6>SUBTOTAL</h6>
                      </th>
                      <th style={{ textAlign: 'end' }}>
                        {`${formatNumber(subTotal)} сўм`}
                      </th>
                    </tr>
                    {/* скидка  */}
                    <tr>
                      <th>
                        <h6>DISCOUNT</h6>
                      </th>
                      <th
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                        }}
                      >
                        {' '}
                        <div className='col-sm-8'>
                          <input
                            type='number'
                            className='form-control form-control-sm contractInput'
                            id='inputPassword'
                            placeholder='Chegirma %'
                            min='0'
                          />
                        </div>
                        %
                      </th>
                    </tr>
                    {/* dastlabki to'lov  */}
                    <tr>
                      <th>
                        <h6>DOWNPAYMENT</h6>
                      </th>
                      <th style={{ textAlign: 'end' }}>0.00</th>
                    </tr>
                    {/* to'lov qarz */}
                    <tr>
                      <th>
                        <h6>LOAN AMOUNT</h6>
                      </th>
                      <th style={{ textAlign: 'end' }}>0.00</th>
                    </tr>
                    {/* oy */}
                    <tr>
                      <th>
                        <h6>MONTHS</h6>
                      </th>
                      <th
                        style={{ display: 'flex', justifyContent: 'flex-end' }}
                      >
                        {' '}
                        <div className='col-sm-8'>
                          <input
                            type='number'
                            className='form-control form-control-sm contractInput'
                            id='inputPassword'
                            min='1'
                            max='24'
                            placeholder='Oyni kiriting'
                          />
                        </div>
                        oy
                      </th>
                    </tr>
                    {/* bank */}
                    <tr>
                      <th>
                        <h6>BANK</h6>
                      </th>
                      <th style={{ textAlign: 'end' }}>
                        <input
                          required
                          type='search'
                          className='form-control form-control-sm contractInput'
                          id='inputPassword'
                          list='languages'
                          name='bank'
                          id='bank'
                          value={data.bank}
                          onChange={(e) => inputHandler(e)}
                          placeholder='Bank Nomini kiriting'
                          autoComplete='off'
                        />
                        {/* <input
                        required
                        className="form-control"
                        placeholder="Вилоят"
                        type="search"
                        list="languages"
                        name="bank"
                        id="bank"
                        value={data.bank}
                        onChange={(e) => inputHandler(e)}
                        style={{ marginBottom: "1rem" }}
                        autoComplete="off"
                      /> */}
                        <datalist id='languages'>
                          {bankNames.map((province, index) => (
                            <option value={province} key={index} />
                          ))}
                        </datalist>
                      </th>
                    </tr>
                    {/* umumiy */}
                    {/* <tr>
                    <th>
                      <h6>TOTAL</h6>
                    </th>
                    <th style={{ textAlign: "end" }}>0.00</th>
                  </tr> */}
                  </thead>
                </Table>{' '}
                <br />
                <Col style={{ direction: 'rtl', marginLeft: '0.9rem' }}>
                  <thead>
                    <tr>
                      <th>
                        <h3>$100</h3>
                      </th>
                      <th>
                        <h3 style={{ color: '#00ced1' }}>MONTHLY PAYMENT</h3>
                      </th>
                    </tr>
                  </thead>
                </Col>
              </Col>
            </Form.Row>
          </Table>
        </Form>
      </div>
    </>
  )
}

export default AddContractCustomerForm
