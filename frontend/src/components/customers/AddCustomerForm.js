import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import cities from '../../api/cities'
import 'react-widgets/dist/css/react-widgets.css'
import Axios from 'axios'
import InputWithLabel from '../general/form/InputWithLabel'
import InputDropdown from '../general/form/InputDropdown'
import InputDateAge from '../general/form/InputDateAge'
import InputDateMinToday from '../general/form/InputDateMinToday'
import InputDateMaxToday from '../general/form/InputDateMaxToday'
import './addcustomerform.scss'

function AddCustomerForm() {
  const url = 'http://localhost:3001/customers/'
  const citiesList = cities.states.names
  const passportIssuers = cities.pasportIssuedBy.names
  const provinceNames = ['Андижон', 'Фарғона', 'Наманган']

  const [data, setData] = useState({
    id: '',
    fName: '',
    lName: '',
    mName: '',
    image: '',
    dob: new Date(),
    cityBorn: '',
    pasportNum: '',
    pasportIssuedBy: '',
    pasportIssuedAt: '',
    pasportExpAt: '',
    addressStreet: '',
    addressCity: '',
    addressProvince: '',
    addressZIP: 0,
    phoneNum: '',
    phoneNum2: '',
    email: '',
    position: '',
    workAt: '',
    salary: 0,
    rating: 0,
    description: '',
  })

  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false)

  function submitHandler(e) {
    e.preventDefault()
    Axios.post(url, data).then((res) => {
      console.log(res.status)
      if (res.status === 201) {
        setIsSuccessfullySubmitted(true)
      }
    })
  }
  function inputHandler(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <Col>
        <Row>
          <Col md={6}>
            <InputWithLabel
              required
              htmlFor='fName'
              label='Исм'
              placeholder='Исм'
              type='text'
              name='fName'
              id='fName'
              value={data.fName}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>
          <Col md={6}>
            <InputWithLabel
              required
              htmlFor='lName'
              label='Фамилия'
              placeholder='Фамилия'
              type='text'
              name='lName'
              id='lName'
              value={data.lName}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>
          <Col md={6}>
            <InputWithLabel
              htmlFor='mName'
              label='Шарифи'
              placeholder='Шарифи'
              type='text'
              name='mName'
              id='mName'
              value={data.mName}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>
          <Col md={6}>
            <InputDateAge
              required
              htmlFor='dob'
              label='Туғилган Сана (минимум 17 ёш бўлиши зарур)'
              name='dob'
              id='dob'
              value={data.dob}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
            <InputDropdown
              required
              htmlFor='cityBorn'
              label='Туғилган Жойи'
              placeholder='Туғилган Жойи'
              name='cityBorn'
              id='cityBorn'
              value={data.cityBorn}
              onChange={(e) => inputHandler(e)}
              items={citiesList}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
            <InputWithLabel
              htmlFor='pasportNum'
              label='Паспорт #'
              placeholder='Паспорт #'
              type='text'
              name='pasportNum'
              id='pasportNum'
              value={data.pasportNum}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
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
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
            <InputDateMaxToday
              required
              htmlFor='pasportIssuedAt'
              label='Паспорт Берилган Сана'
              name='pasportIssuedAt'
              id='pasportIssuedAt'
              value={data.pasportIssuedAt}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
            <InputDateMinToday
              required
              htmlFor='pasportExpAt'
              label='Амал Қилиш Муддати'
              type='Date'
              name='pasportExpAt'
              id='pasportExpAt'
              value={data.pasportExpAt}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
            <label htmlFor='addressProvince' style={{ marginBottom: '0rem' }}>
              Манзил: Вилоят
            </label>
            <input
              required
              className='form-control'
              placeholder='Вилоят'
              type='search'
              list='languages'
              name='addressProvince'
              id='addressProvince'
              value={data.addressProvince}
              onChange={(e) => inputHandler(e)}
              style={{ marginBottom: '1rem' }}
              autoComplete='off'
              disabled={isSuccessfullySubmitted ? true : false}
            />
            <datalist id='languages'>
              {provinceNames.map((province, index) => (
                <option value={province} key={index} />
              ))}
            </datalist>
          </Col>

          <Col md={6}>
            <InputDropdown
              required
              htmlFor='addressCity'
              label='Манзил: Туман'
              placeholder='Туман'
              name='addressCity'
              id='addressCity'
              value={data.addressCity}
              onChange={(e) => inputHandler(e)}
              items={citiesList}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
            <InputWithLabel
              required
              htmlFor='addressStreet'
              label='Манзил: Уй Рақами # ва Кўча Номи'
              placeholder='Кўча Номи'
              type='text'
              name='addressStreet'
              id='addressStreet'
              value={data.addressStreet}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
            <InputWithLabel
              htmlFor='addressZIP'
              label='Почта Индехи'
              placeholder='Почта Индехи'
              type='number'
              name='addressZIP'
              id='addressZIP'
              min='100000'
              max='999999'
              value={data.addressZIP}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
            <InputWithLabel
              htmlFor='email'
              label='Email'
              placeholder='Email'
              type='email'
              name='email'
              id='email'
              value={data.email}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
            <InputWithLabel
              required
              htmlFor='phoneNum'
              label='Телефон 1# (Намуна: 90-111-22-33)'
              placeholder='Телефон 1#'
              type='tel'
              name='phoneNum'
              id='phoneNum'
              pattern='[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
              value={data.phoneNum}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
            <InputWithLabel
              htmlFor='phoneNum2'
              label='Телефон 2# (Намуна: 90-111-22-33)'
              placeholder='Телефон 2#'
              type='tel'
              name='phoneNum2'
              id='phoneNum2'
              pattern='[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
              value={data.phoneNum2}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
            <InputWithLabel
              required
              htmlFor='position'
              label='Лавозим'
              placeholder='Лавозим'
              type='text'
              name='position'
              id='position'
              value={data.position}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
            <InputWithLabel
              required
              htmlFor='workAt'
              label='Иш Жойи'
              placeholder='Иш Жойи'
              type='text'
              name='workAt'
              id='workAt'
              value={data.workAt}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
            <InputWithLabel
              required
              htmlFor='salary'
              label='Маоши (сўм)'
              placeholder='Маоши'
              type='number'
              name='salary'
              id='salary'
              min='100000'
              value={data.salary}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={6}>
            <InputWithLabel
              htmlFor='image'
              label='Расм'
              placeholder='Расм'
              type='file'
              name='image'
              accept='image/*,.pdf'
              id='image'
              value={data.image}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          <Col md={12}>
            <InputWithLabel
              htmlFor='description'
              label='Изоҳ'
              placeholder='Изоҳ'
              type='text'
              name='description'
              id='description'
              value={data.description}
              onChange={(e) => inputHandler(e)}
              disabled={isSuccessfullySubmitted ? true : false}
            />
          </Col>

          {!isSuccessfullySubmitted && (
            <Col md={12} className='text-center'>
              <button type='submit' className='btn btn-primary'>
                ҚЎШИШ
              </button>
            </Col>
          )}

          {isSuccessfullySubmitted && (
            <Col md={12} className='success'>
              муваффақиятли қўшилди
            </Col>
          )}
        </Row>
      </Col>
    </form>
  )
}

export default AddCustomerForm
