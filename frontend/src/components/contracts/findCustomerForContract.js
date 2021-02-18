import React from 'react'
import InputDropdown from '../general/form/InputDropdown'

function findCustomerForContract() {
  const [data, setData] = useState({
    id: '',
    fName: '',
    lName: '',
    pasportNum: '',
  })

  return (
    <>
      <InputDropdown
        required
        htmlFor='pasportIssuedBy'
        label='Ким Томонидан Берилган'
        placeholder='Ким Томонидан Берилган'
        name='pasportIssuedBy'
        id='pasportIssuedBy'
        value={data.pasportIssuedBy}
        onChange={(e) => inputHandler(e)}
        items={passportIssuers}
      />
    </>
  )
}

export default findCustomerForContract
