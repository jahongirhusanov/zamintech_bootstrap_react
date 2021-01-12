import React, { useState, useEffect } from 'react'
import { Form, Col, Row, Button, Container } from 'react-bootstrap'
import Axios from 'axios'

function AddCustomerFormDumy() {
  const url = 'http://localhost:3001/customers/'

  const [data, setData] = useState({
    fName: '',
    lName: '',
    mName: '',
  })

  function submitHandler(e) {
    e.preventDefault()
    Axios.post(url, data).then((res) => {
      console.log(res.data)
    })
  }
  function inputHandler(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  return (
    <div className='container'>
      <form onSubmit={(e) => submitHandler(e)}>
        <Col>
          <Row>
            <Col md={6}>
              <label htmlFor='fName'>Ism</label>
              <input
                required
                type='text'
                name='fName'
                id='fName'
                className='form-control'
                placeholder='Ism'
                value={data.fName}
                onChange={(e) => inputHandler(e)}
              />
            </Col>
            <Col md={6}>
              <label htmlFor='lName'>Familiya</label>
              <input
                required
                type='text'
                name='lName'
                id='lName'
                className='form-control'
                placeholder='Familiya'
                value={data.lName}
                onChange={(e) => inputHandler(e)}
              />
            </Col>
            <Col md={6}>
              <label htmlFor='lName'>Sharifi</label>
              <input
                required
                type='text'
                name='mName'
                id='mName'
                className='form-control'
                placeholder='Sharifi'
                value={data.mName}
                onChange={(e) => inputHandler(e)}
              />
            </Col>
            <Col md={12}>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </Col>
          </Row>
        </Col>

        {/* <div className='form-group'>
          <label htmlFor='fName'>Ism</label>
          <input
            type='text'
            name='fName'
            id='fName'
            className='form-control'
            placeholder='Ism'
            value={data.fName}
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='lName'>Familiya</label>
          <input
            type='text'
            name='lName'
            id='lName'
            className='form-control'
            placeholder='Familiya'
            value={data.lName}
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button> */}
      </form>
    </div>
  )
}

export default AddCustomerFormDumy
