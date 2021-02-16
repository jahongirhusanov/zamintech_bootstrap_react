import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import StatisticCard from '../../components/home/StatisticCard'
import CardFooterArrow from '../../components/home/CardFooterArrow'
import CardFooterProgress from '../../components/home/CardFooterProgress'
import DonutChart from '../../components/home/DonutChart'

function HomeScreen() {
  return (
    <>
      <Row>
        <Col sm={12} md={4} lg={3}>
          <StatisticCard
            title='телефонлар:'
            subtitle='3,134'
            fontAwsIcon='fa-mobile'
            unit='дона'
            children={
              <CardFooterArrow progressNumber='1' iconArrow='fa-arrow-up' />
            }
          />
        </Col>

        <Col sm={12} md={4} lg={3}>
          <StatisticCard
            title='Маиший техника:'
            subtitle='101'
            fontAwsIcon='fa-blender'
            unit='дона'
            backIconColor='#fb8c01'
            children={
              <CardFooterArrow progressNumber='1' iconArrow='fa-arrow-down' />
            }
          />
        </Col>

        <Col sm={12} md={4} lg={3}>
          <StatisticCard
            title='Мебель:'
            subtitle='12'
            fontAwsIcon='fa-couch'
            unit='дона'
            children={
              <CardFooterArrow progressNumber='2' iconArrow='fa-arrow-up' />
            }
          />
        </Col>

        <Col sm={12} md={4} lg={3}>
          <StatisticCard
            title='Телевизор:'
            subtitle='66'
            fontAwsIcon='fa-tv'
            unit='дона'
            backIconColor='#fb8c01'
            children={
              <CardFooterArrow progressNumber='2' iconArrow='fa-arrow-down' />
            }
          />
        </Col>

        <Col sm={12} md={4} lg={3}>
          <StatisticCard
            title='март тушумлари:'
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
        <Col sm={12} lg={4} className='my-3'>
          <DonutChart title='Shartnoma Turlari:' />
        </Col>
      </Row>
    </>
  )
}

export default HomeScreen
