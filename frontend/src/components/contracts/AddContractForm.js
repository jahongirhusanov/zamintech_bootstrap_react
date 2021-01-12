import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import '../../styles/contracts/addForm.css'
import Axios from 'axios'
import AddContractFormHeader from './AddContractFormHeader'
import AddContractCustomer from './AddContractCustomer'
import AddContractContractNumber from './AddContractContractNumber'

function AddCustomerForm() {
  const [loading, setLoading] = useState(true)
  // const [customer, setCustomer] = useState({})
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = React.useState([])

  useEffect(() => {
    async function fetchMyApi() {
      const url = 'http://localhost:3001/customers'
      const res = await fetch(url)
      const states = await res.json()
      setSearchResults(states)
    }
    fetchMyApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleSearchInput(event) {
    setSearchText(event.target.value)
  }

  return (
    <form>
      <Col>
        <Row className='contractContainer'>
          <AddContractFormHeader />
          {/* <AddContractCustomer /> */}

          {/* ======================== AddContractCustomer ======================== */}
          <Col xs={12} md={6}>
            <div
              className='col-auto'
              style={{ width: '70%', position: 'relative', padding: 0 }}
            >
              <div className='input-group mb-2'>
                <input
                  type='text'
                  className='form-control form-control-sm'
                  id='searchText'
                  placeholder='Passport рақам киритинг ...'
                  value={searchText}
                  onChange={handleSearchInput}
                />
                <div className='input-group-prepend'>
                  <div
                    className='input-group-text'
                    style={{ cursor: 'pointer' }}
                  >
                    <i className='fas fa-search'></i>
                  </div>
                </div>
              </div>
              {searchResults.map((state, index) => (
                <ul key={state.id}>
                  <li>{state.pasportNum}</li>
                </ul>
              ))}
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

          {/* ================================= */}

          <AddContractContractNumber />

          <Col md={12} className='text-center'>
            <button type='submit' className='btn btn-primary'>
              ҚЎШИШ
            </button>
          </Col>
        </Row>
      </Col>
    </form>
  )
}

export default AddCustomerForm
