import React, { useState, useEffect } from 'react'
import { Table, Card } from 'react-bootstrap'

function ContractProductCard({ match }) {
  var currencyFormatter = require('currency-formatter')
  const [loading, setLoading] = useState(true)
  const [contract, setContract] = useState({})

  // useEffect(async () => {
  //   const url = 'http://localhost:3001/contracts'
  //   const res = await fetch(url)
  //   const data = await res.json()
  //   setContract(
  //     data.find(function (p) {
  //       return p.id == match.params.id
  //     })
  //   )
  //   setLoading(false)
  // }, [])

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

  function total(price, quantity) {
    let number = price * quantity
    number = Math.round(number)
    return currencyFormatter.format(number, { code: '' })
  }

  function formatNumber(number) {
    number = Math.round(number)
    return currencyFormatter.format(number, { code: '' })
  }

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <Card className='p-3 rounded'>
            <h6>Махсулотлар:</h6>
            <Table hover size='sm' style={{ fontSize: '0.775rem' }}>
              <thead
                style={{
                  color: '#78c2ad',
                  fontWeight: 900,
                  fontSize: '0.875rem',
                }}
              >
                <tr>
                  <th>#</th>
                  <th>Махсулотлар Номи</th>
                  <th>Нархи (Дона)</th>
                  <th>Миқдор</th>
                  <th>Жами</th>
                </tr>
              </thead>
              <tbody>
                {contract.productItems.map((tableItem, index) => (
                  <tr key={tableItem.id}>
                    <td>{index + 1}</td>
                    <td>{tableItem.name}</td>
                    <td>{formatNumber(tableItem.installmentPrice)}</td>
                    <td>{tableItem.quantity}</td>
                    <td>
                      {total(tableItem.installmentPrice, tableItem.quantity)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Table
              hover
              size='sm'
              style={{
                fontSize: '0.875rem',
                width: '30%',
                fontWeight: 'bold',
                textAlign: 'right',
                // display: 'block',
                // width: 'auto',
                marginRight: '0px',
                marginLeft: 'auto',
              }}
            >
              <tbody>
                <tr>
                  <td>Жами:</td>
                  <td>{`${formatNumber(contract.contractAmount)} сўм`}</td>
                </tr>
                <tr>
                  <td>Шартнома Мудати (ой)</td>
                  <td>{`${contract.contractTermsInMonths} - ой`}</td>
                </tr>

                <tr>
                  <td>Ойлик Тўлов</td>
                  <td>{`${formatNumber(
                    contract.expectedMonthlyPayment
                  )} сўм`}</td>
                </tr>
                <tr>
                  <td>Жами Тўлов:</td>
                  <td>{`${formatNumber(
                    contract.expectedTotalPayment
                  )} сўм`}</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </>
      )}
    </>
  )
}

export default ContractProductCard
