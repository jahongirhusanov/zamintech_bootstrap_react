import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import ContractDisabledInfoForm from '../../components/contracts/ContractDisabledInfoForm'
import ContractProductCard from '../../components/contracts/ContractProductCard'
import ContractCustomerCard from '../../components/contracts/ContractCustomerCard'
import ContractMonthlyInstallment from '../../components/contracts/ContractMonthlyInstallment'

function ContractScreen({ match }) {
  const [loading, setLoading] = useState(true)
  const [contract, setContract] = useState({})
  // const setContract = useState({})

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
      setLoading(false)
    }
    fetchMyApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Link className='btn btn-light' to='/contracts'>
        <i className='fas fa-long-arrow-alt-left' size='5x'></i>
      </Link>

      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <Row className='my-2'>
            <Col md={4}>
              <ContractCustomerCard match={match} />
            </Col>
            <Col md={8}>
              <ContractDisabledInfoForm match={match} />
            </Col>
          </Row>
          <Row className='my-2'>
            <Col md={12}>
              <ContractProductCard match={match} />
            </Col>
          </Row>
          <Row className='my-2'>
            <Col md={12}>
              <ContractMonthlyInstallment match={match} />
            </Col>
          </Row>
        </div>
      )}
    </>
  )
}

export default ContractScreen
