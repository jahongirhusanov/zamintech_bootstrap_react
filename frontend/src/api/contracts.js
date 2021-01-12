const contracts = [
  {
    id: 1,
    contractNum: 'ZT-000001',
    contractDate: '12/31/2019',
    customerId: {
      id: 1,
      fName: 'Ahmadjon1',
      lName: 'Polonchiyev1',
    },
    productItemsIds: [
      {
        id: 1,
        name: '1-Airpods Wireless Bluetooth Headphones',
        installmentPrice: 2100000,
      },
    ],
    contractTermsInMonths: 3,
    currentTermNumber: 1,
    nextPaymentDate: '01/31/2020',
    nextPaymentAmount: 300000,
    status: 'Active',
  },
  {
    id: 2,
    contractNum: 'ZT-000002',
    contractDate: '12/29/2019',
    customerId: {
      id: 3,
      fName: 'Ahmadjon3',
      lName: 'Polonchiyev3',
    },
    productItemsIds: [
      {
        id: 2,
        name: '2-iPhone 11 Pro 256GB Memory',
        installmentPrice: 2200000,
      },
    ],
    contractTermsInMonths: 6,
    currentTermNumber: 2,
    nextPaymentDate: '01/29/2020',
    nextPaymentAmount: 450000,
    status: 'Active',
  },
]

export default contracts
