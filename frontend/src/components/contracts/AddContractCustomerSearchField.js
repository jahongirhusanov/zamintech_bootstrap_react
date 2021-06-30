import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import InputDropdown from '../general/form/InputDropdown'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'

function AddContractCustomerSearchField() {
  // const [data, setData] = useState({
  //   id: '',
  //   fName: '',
  //   lName: '',
  //   pasportNum: '',
  // })

  const [fName, setFName] = useState('')

  const [searchResults, setSearchResults] = React.useState([])

  useEffect(() => {
    async function fetchMyApi() {
      const url = 'http://localhost:3001/customers'
      const res = await fetch(url)
      const states = await res.json()
      console.log(states[2].pasportNum)
      setSearchResults(states)
      // setFName(searchResults.fname)
    }
    fetchMyApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const selectCustomer = () => {
  //   setFName(searchResults.fname)
  // }

  return (
    <>
      <Col xs={12} md={6}>
        <Col xs={12}>
          <div
            className='col-auto mb-2'
            style={{ position: 'relative', padding: 0 }}
          >
            <Autocomplete
              id='combo-box-demo'
              options={searchResults}
              getOptionLabel={(option) => option.pasportNum}
              style={{ width: 300 }}
              // onClick={selectCustomer}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Passport рақам...'
                  variant='outlined'
                />
              )}
            />
          </div>

          <div className='form-group' style={{ marginBottom: '8px' }}>
            <input
              readOnly
              type='text'
              className='form-control-plaintext form-control form-control-sm'
              name=''
              id=''
              placeholder='Исм Фамилия'
              value={searchResults}
            />
          </div>

          <div className='form-group' style={{ marginBottom: '8px' }}>
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

          <div className='form-group' style={{ marginBottom: '8px' }}>
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
      </Col>
    </>
  )
}

export default AddContractCustomerSearchField
