import React, { useState, useEffect } from 'react'
import { Table, Card } from 'react-bootstrap'

function ContractMonthlyInstallment({ match }) {
  const [loading, setLoading] = useState(true)
  const [contract, setContract] = useState({})
  var currencyFormatter = require('currency-formatter')

  // We getting error with below: Effect callbacks are synchronous to prevent race conditions. Put the async function inside:
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

  // ALL FUNCTION to for data
  function total(price, quantity) {
    var number = price + quantity
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
            <h6>Тўлов Жадвали:</h6>
            <Table hover bordered size='sm' style={{ fontSize: '0.775rem' }}>
              <thead
                style={{
                  color: '#78c2ad',
                  fontWeight: 900,
                  fontSize: '0.875rem',
                }}
              >
                <tr>
                  <th>Тўлов #</th>
                  <th>Олдинги Ойдан Қолдиқ</th>
                  <th>Шартнома Бўйича Сумма</th>
                  <th>Шартнома Сумма + Қолдиқ</th>
                  <th>Сумма Тўланди</th>
                  <th>Тўлов Санаси</th>
                  <th>Тўлов Усули</th>
                  <th>Статус</th>
                </tr>
              </thead>
              <tbody>
                {contract.payments.map((tableItem, index) => (
                  <tr key={tableItem.id}>
                    <td>{index + 1}</td>
                    <td>{formatNumber(tableItem.balanceFromPreviousMonth)}</td>
                    <td>{formatNumber(tableItem.paymentPerContract)}</td>
                    <td>
                      {total(
                        tableItem.balanceFromPreviousMonth,
                        tableItem.paymentPerContract
                      )}
                    </td>
                    <td>{formatNumber(tableItem.payedAmount)}</td>
                    <td>{tableItem.payedAt}</td>
                    <td>{tableItem.payedBy}</td>
                    <td style={{ textAlign: 'center' }}>
                      {tableItem.payed ? (
                        <i
                          className='fas fa-clipboard-check'
                          style={{ color: '#78c2ad' }}
                        />
                      ) : (
                        <i
                          className='far fa-times-circle'
                          style={{ color: 'red' }}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </>
      )}
    </>
  )
}

export default ContractMonthlyInstallment
