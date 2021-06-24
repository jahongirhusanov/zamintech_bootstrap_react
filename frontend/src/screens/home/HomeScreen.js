import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import StatisticCard from '../../components/home/StatisticCard'
import CardFooterArrow from '../../components/home/CardFooterArrow'
import CardFooterProgress from '../../components/home/CardFooterProgress'
import DonutChart from '../../components/home/DonutChart'
import BarChart from '../../components/home/BarChart'

function HomeScreen() {
  var [phoneCount, setPhoneCount] = useState(0)
  var [homeAppliancesCount, setHomeAppliancesCount] = useState(0)
  var [furnitureCount, setFurnitureCount] = useState(0)
  var [tvCount, setTvCount] = useState(0)
  var [bikeCount, setBikeCount] = useState(0)
  var [scooterCount, setScooterCount] = useState(0)
  var [carpetCount, setCarpetCount] = useState(0)
  var [akfaCount, setAkfaCount] = useState(0)

  function findInStockByCategory(data, prodType) {
    var items = data.filter(function (type) {
      return type.category === prodType
    })
    var total = 0
    for (var i = 0; i < items.length; i++) {
      total += items[i].countInStock
    }
    return total
  }

  useEffect(() => {
    async function fetchMyApi() {
      var url = 'http://localhost:3001/products'
      var res = await fetch(url)
      var data = await res.json()

      const phones = findInStockByCategory(data, 'Phone')
      const homeAppliances = findInStockByCategory(data, 'Home Appliances')
      const furniture = findInStockByCategory(data, 'Furniture')
      const tvs = findInStockByCategory(data, 'Tv')
      const bikes = findInStockByCategory(data, 'Bike')
      const scooters = findInStockByCategory(data, 'Scooter')
      const carpets = findInStockByCategory(data, 'Carpet')
      const akfa = findInStockByCategory(data, 'akfa')

      setPhoneCount(phones)
      setHomeAppliancesCount(homeAppliances)
      setFurnitureCount(furniture)
      setTvCount(tvs)
      setBikeCount(bikes)
      setScooterCount(scooters)
      setCarpetCount(carpets)
      setAkfaCount(akfa)
    }
    fetchMyApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Row>
        <Col sm={12} md={4} lg={3}>
          <StatisticCard
            title='телефонлар:'
            subtitle={phoneCount}
            fontAwsIcon='fa-mobile'
            unit='дона'
            children={
              <CardFooterArrow progressNumber='0' iconArrow='fa-arrow-up' />
            }
          />
        </Col>

        <Col sm={12} md={4} lg={3}>
          <StatisticCard
            title='Маиший техника:'
            subtitle={homeAppliancesCount}
            fontAwsIcon='fa-blender'
            unit='дона'
            backIconColor='#fb8c01'
            children={
              <CardFooterArrow progressNumber='0' iconArrow='fa-arrow-down' />
            }
          />
        </Col>

        <Col sm={12} md={4} lg={3}>
          <StatisticCard
            title='Мебель:'
            subtitle={furnitureCount}
            fontAwsIcon='fa-couch'
            unit='дона'
            children={
              <CardFooterArrow progressNumber='0' iconArrow='fa-arrow-up' />
            }
          />
        </Col>

        <Col sm={12} md={4} lg={3}>
          <StatisticCard
            title='Телевизор:'
            subtitle={tvCount}
            fontAwsIcon='fa-tv'
            unit='дона'
            backIconColor='#fb8c01'
            children={
              <CardFooterArrow progressNumber='0' iconArrow='fa-arrow-down' />
            }
          />
        </Col>

        <Col sm={12} md={4} lg={3}>
          <StatisticCard
            title='велосипед:'
            subtitle={bikeCount}
            fontAwsIcon='fa-bicycle'
            unit='дона'
            children={
              <CardFooterArrow progressNumber='0' iconArrow='fa-arrow-up' />
            }
          />
        </Col>

        <Col sm={12} md={4} lg={3}>
          <StatisticCard
            title='скутер:'
            subtitle={scooterCount}
            fontAwsIcon='fa-motorcycle'
            unit='дона'
            backIconColor='#fb8c01'
            children={
              <CardFooterArrow progressNumber='1' iconArrow='fa-arrow-down' />
            }
          />
        </Col>

        <Col sm={12} md={4} lg={3}>
          <StatisticCard
            title='гиламлар:'
            subtitle={carpetCount}
            fontAwsIcon='fa-shoe-prints'
            unit='дона'
            children={
              <CardFooterArrow progressNumber='2' iconArrow='fa-arrow-up' />
            }
          />
        </Col>

        <Col sm={12} md={4} lg={3}>
          <StatisticCard
            title='AKFA:'
            subtitle={akfaCount}
            fontAwsIcon='fa-door-open'
            unit='дона'
            backIconColor='#fb8c01'
            children={
              <CardFooterArrow progressNumber='2' iconArrow='fa-arrow-down' />
            }
          />
        </Col>

        <Col sm={12} md={4} lg={3}>
          <StatisticCard
            title='Феврал тушумлар:'
            subtitle='17,000,955'
            fontAwsIcon='fa-money-bill-alt'
            unit='сўм'
            children={<CardFooterProgress currentPaymentStatus='70' />}
          />
        </Col>

        <Col sm={12} md={4} lg={3}>
          <StatisticCard
            title='Мижозлар:'
            subtitle='101'
            fontAwsIcon='fa-users'
            unit='нафар'
            backIconColor='#fb8c01'
            children={
              <CardFooterArrow progressNumber='20' iconArrow='fa-arrow-down' />
            }
          />
        </Col>

        <Col sm={12} md={4} lg={3}>
          <StatisticCard
            title='шартномалар:'
            subtitle='101'
            fontAwsIcon='fa-handshake'
            unit='нафар'
            children={
              <CardFooterArrow progressNumber='20' iconArrow='fa-arrow-down' />
            }
          />
        </Col>

        <Col sm={12} md={4} lg={3}>
          <StatisticCard
            title='қора рўйҳат:'
            subtitle='9'
            fontAwsIcon='fa-file-contract'
            unit='нафар'
            backIconColor='#E53934'
            children={
              <CardFooterArrow progressNumber='20' iconArrow='fa-arrow-down' />
            }
          />
        </Col>
      </Row>

      {/* it has to be on right side */}
      <Row>
        <Col sm={0} lg={8} className='my-3'>
          <BarChart title='ТОП 3 махсулотлари савдоси:' />
        </Col>
        <Col sm={12} lg={4} className='my-3'>
          <DonutChart title='Шартнома Турлари:' />
        </Col>
      </Row>
    </>
  )
}

export default HomeScreen
