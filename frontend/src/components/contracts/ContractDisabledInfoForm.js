import React, { useState, useEffect } from 'react'
import { Form, Card } from 'react-bootstrap'
import FormControl from '../general/form/FormControl'

function ContractDisabledInfoForm({ match }) {
  var currencyFormatter = require('currency-formatter')
  const [loading, setLoading] = useState(true)
  const [contract, setContract] = useState({})

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
          <Card className='p-3 rounded' style={{ height: '100%' }}>
            <Form>
              <Form.Row style={{ fontSize: '1.1rem' }}>
                <FormControl
                  label='Шартнома #'
                  defaultValue={contract.contractNum}
                  disabled
                />
                <FormControl
                  label='Тузилган Сана'
                  defaultValue={contract.contractDate}
                  disabled
                />
                <FormControl
                  label='Кейинги Тўлов Сана'
                  defaultValue={contract.nextPaymentDate}
                  disabled
                />
                <FormControl
                  label='Кейинги Тўлов #'
                  defaultValue={`${contract.currentTermNumber} - ой`}
                  disabled
                />
                <FormControl
                  label='Шартнома Мудати (ой)'
                  defaultValue={`${contract.contractTermsInMonths} ой`}
                  disabled
                />
                <FormControl
                  label='Кейинги Тўлов'
                  defaultValue={`${formatNumber(
                    contract.nextPaymentAmount
                  )} сўм`}
                  disabled
                />
                <FormControl
                  label='Банк Номи'
                  defaultValue='Миллий Банк'
                  disabled
                />
              </Form.Row>
            </Form>
          </Card>
        </>
      )}
    </>
  )
}

export default ContractDisabledInfoForm
