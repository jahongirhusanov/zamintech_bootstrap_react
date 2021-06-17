import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Contract from '../../components/contracts/Contract'
import { Link } from 'react-router-dom'

function ContractsScreen() {
  const [state, setState] = useState({
    loading: true,
    contractList: null,
  })

  useEffect(() => {
    async function fetchMyApi() {
      const url = 'http://localhost:3001/contracts'
      const res = await fetch(url)
      const data = await res.json()
      setState({
        contractList: data,
        loading: false,
      })
    }
    fetchMyApi()
  }, [])

  return (
    <>
      <Row sm={0} md={4}>
        <Col md={3}>
          <h1 className='screenTitle'>Шартномалар</h1>
          <Link to='/contract-add'>
            <Button size='sm' className='btn btn-primary addButton'>
              <i className='fas fa-plus-circle'></i>
            </Button>{' '}
          </Link>
        </Col>
      </Row>

      {state.loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <Row>
            {state.contractList.map((contract) => (
              <Col key={contract.id} sm={12} md={6} lg={4} xl={3}>
                <Contract contract={contract} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  )
}

export default ContractsScreen
