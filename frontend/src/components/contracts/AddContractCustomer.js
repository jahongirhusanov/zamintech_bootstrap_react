import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

function AddContractCustomer() {
  const [searchText, setSearchText] = useState('')

  function handleSearchInput(event) {
    setSearchText(event.target.value)
    console.log(searchText)
  }

  function handleSearchSubmit() {}

  return (
    <>
      <Col xs={12} md={6}>
        <div
          className='col-auto'
          style={{ width: '70%', position: 'relative', padding: 0 }}
        >
          <div className='input-group mb-2'>
            <input
              type='text'
              className='form-control form-control-sm'
              id='inlineFormInputGroup'
              placeholder='Passport #'
              value={searchText}
              onChange={handleSearchInput}
            />
            <div className='input-group-prepend'>
              <div className='input-group-text' style={{ cursor: 'pointer' }}>
                <i className='fas fa-search' onClick={handleSearchSubmit}></i>
              </div>
            </div>
          </div>
        </div>

        <div
          className='form-group'
          style={{ width: '70%', marginBottom: '8px' }}
        >
          <input
            readOnly
            type='text'
            className='form-control-plaintext form-control form-control-sm'
            name=''
            id=''
            placeholder='Исм Фамилия'
            value=''
          />
        </div>

        <div
          className='form-group'
          style={{ width: '70%', marginBottom: '8px' }}
        >
          <input
            readOnly
            type='text'
            className='form-control-plaintext form-control form-control-sm'
            name=''
            id=''
            placeholder='Манзил (Уй Рақами # ва Кўча Номи)'
            value=''
          />
        </div>

        <div
          className='form-group'
          style={{ width: '70%', marginBottom: '8px' }}
        >
          <input
            readOnly
            type='text'
            className='form-control-plaintext form-control form-control-sm'
            name=''
            id=''
            placeholder='Манзил (Туман, Вилоят)'
            value=''
          />
        </div>
      </Col>
    </>
  )
}

export default AddContractCustomer
