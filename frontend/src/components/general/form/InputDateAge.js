import React from 'react'

function InputDateAge(props) {
  var today = new Date()
  var dd = today.getDate()
  var mm = today.getMonth() + 1 //January is 0!
  var yyyy = today.getFullYear() - 17
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  const age = yyyy + '-' + mm + '-' + dd

  return (
    <>
      <label htmlFor={props.htmlFor} style={{ marginBottom: '0rem' }}>
        {props.label}
      </label>
      <input
        required={props.required}
        type='Date'
        name={props.name}
        id={props.id}
        className='form-control'
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        max={age}
        style={{ marginBottom: '1rem' }}
      />
    </>
  )
}

export default InputDateAge
