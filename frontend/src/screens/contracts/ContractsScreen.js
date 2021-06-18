import React, { useState, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'

function ContractsScreen() {
  //   const [contracts, setContracts] = useState([])

  var products = [
    {
      id: 1,
      contractNum: 'ZT-000001',
      contractDate: '08/10/2020',
    },
    {
      id: 2,
      contractNum: 'ZT-000002',
      contractDate: '09/11/2019',
    },
    {
      id: 2,
      contractNum: 'ZT-000002',
      contractDate: '09/11/2019',
    },
    {
      id: 2,
      contractNum: 'ZT-000002',
      contractDate: '09/11/2019',
    },
    {
      id: 2,
      contractNum: 'ZT-000002',
      contractDate: '09/11/2019',
    },
    {
      id: 2,
      contractNum: 'ZT-000002',
      contractDate: '09/11/2019',
    },
  ]

  const columns = [
    {
      dataField: 'id',
      text: 'Product ID',
    },
    {
      dataField: 'contractNum',
      text: 'Contract Number',
      filter: textFilter(),
    },
    {
      dataField: 'contractDate',
      text: 'Date',
      filter: textFilter({
        onFilter: (filterVal) => console.log(`Filter Value: ${filterVal}`),
      }),
    },
  ]

  function afterFilter(newResult, newFilters) {
    console.log(newResult)
    console.log(newFilters)
  }

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      // need to impliment click for full details
      console.log(`clicked on row with index: ${rowIndex}`)
    },
    onMouseEnter: (e, row, rowIndex) => {
      // need to impliment backgroud color change
      console.log(`enter on row with index: ${rowIndex}`)
    },
  }

  return (
    <BootstrapTable
      keyField='id'
      data={products}
      columns={columns}
      filter={filterFactory({ afterFilter })}
      rowEvents={rowEvents}
    />
  )
}

export default ContractsScreen
