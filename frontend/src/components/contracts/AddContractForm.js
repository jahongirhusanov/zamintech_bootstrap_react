import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
// import '../../styles/contracts/addForm.css'
import './addcontractform.scss'
import Axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import AddContractFormHeader from './AddContractFormHeader'
import AddContractCustomer from './AddContractCustomer'
import AddContractContractNumber from './AddContractContractNumber'
import AddContractCustomerForm from './AddContractCustomerForm'
import AddContractCustomerSearchField from './AddContractCustomerSearchField'

function AddCustomerForm() {
  const [loading, setLoading] = useState(true)
  // const [customer, setCustomer] = useState({})
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = React.useState([])

  const [data, setData] = useState({
    id: '',
    fName: '',
    lName: '',
    pasportNum: '',
  })

  useEffect(() => {
    async function fetchMyApi() {
      const url = 'http://localhost:3001/customers'
      const res = await fetch(url)
      const states = await res.json()
      console.log(states[2].pasportNum)
      setSearchResults(states)
    }
    fetchMyApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleSearchInput(event) {
    setSearchText(event.target.value)
  }

  function inputHandler(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  return (
    <form>
      <Col>
        <Row className='contractContainer'>
          <AddContractFormHeader />

          {/* <AddContractCustomer /> */}

          {/* ======================== AddContractCustomer ======================== */}
          <AddContractCustomerSearchField />
          
          <AddContractContractNumber />
          
          {/* <Col md={12} className='text-center'>
            <button type='submit' className='btn btn-primary'>
              ҚЎШИШ
            </button>
          </Col> */}

        </Row>
      </Col>
    </form>
  )
}

export default AddCustomerForm
