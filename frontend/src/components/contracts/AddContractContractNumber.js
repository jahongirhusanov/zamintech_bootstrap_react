import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import InputDateToday from '../general/form/InputDateToday'
import '../../styles/contracts/addForm.css'

function AddContractContractNumber() {
  const [searchText, setSearchText] = useState('')

  function handleSearchInput(event) {
    setSearchText(event.target.value)
    console.log(searchText)
  }

  function handleSearchSubmit() {}

  return (
    <>
      <Col xs={12} md={6}>
        <div className='form-group row'>
          <label
            htmlFor='inputPassword'
            className='col-sm-4 col-form-label'
            style={{ textAlign: 'right', paddingRight: 0 }}
          >
            Шартнома # :
          </label>
          <div className='col-sm-8' style={{ margin: 'auto' }}>
            <input
              type='text'
              className='form-control form-control-sm contractInput'
              id='inputPassword'
              placeholder='Шартнома рақам киритинг'
            />
          </div>
        </div>
        <InputDateToday label='Date' />
      </Col>
    </>
  )
}

export default AddContractContractNumber
