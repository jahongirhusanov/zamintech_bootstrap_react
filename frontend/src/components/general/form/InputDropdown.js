import React from 'react'

function InputDropdown(props) {
  return (
    <>
      <label htmlFor={props.htmlFor} style={{ marginBottom: '0rem' }}>
        {props.label}
      </label>
      <input
        required={props.required}
        className='form-control'
        placeholder={props.placeholder}
        type='search'
        list='lists'
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        autoComplete='off'
        style={{ marginBottom: '1rem' }}
        disabled={props.disabled}
      />
      <datalist id='lists'>
        {props.items.map((item, index) => (
          <option value={item} key={index} />
        ))}
      </datalist>
    </>
  )
}

export default InputDropdown

/* <Col md={6}>
            <label htmlFor='cityBorn' style={{ marginBottom: '0rem' }}>
              Туғилган Жойи
            </label>
            <input
              required
              className='form-control'
              placeholder='Туғилган Жойи'
              type='search'
              list='languages'
              name='cityBorn'
              id='cityBorn'
              value={data.cityBorn}
              onChange={(e) => inputHandler(e)}
              style={{ marginBottom: '1rem' }}
              autoComplete='off'
            />
            <datalist id='languages'>
              {cities.map((province) => (
                <option value={province} />
              ))}
            </datalist>
          </Col> */
