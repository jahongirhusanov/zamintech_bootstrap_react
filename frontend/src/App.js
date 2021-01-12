import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductsScreen from './screens/products/ProductsScreen'
import ProductScreen from './screens/products/ProductScreen'
import HomeScreen from './screens/home/HomeScreen'
import CustomersScreen from './screens/customers/CustomersScreen'
import CustomerScreen from './screens/customers/CustomerScreen'
import AddCustomerScreen from './screens/customers/AddCustomerScreen'
import ContractsScreen from './screens/contracts/ContractsScreen'
import ContractScreen from './screens/contracts/ContractScreen'
import AddContractScreen from './screens/contracts/AddContractScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/products' component={ProductsScreen} exact />
          <Route path='/products/:id' component={ProductScreen} exact />

          <Route path='/customers' component={CustomersScreen} exact />
          <Route path='/customer/:id' component={CustomerScreen} exact />
          <Route path='/customer-add' component={AddCustomerScreen} exact />

          <Route path='/contracts' component={ContractsScreen} exact />
          <Route path='/contracts/:id' component={ContractScreen} exact />
          <Route path='/contract-add' component={AddContractScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App

// npm start frontEnd
// json-server --watch db.json --port 3001 on Desktop
