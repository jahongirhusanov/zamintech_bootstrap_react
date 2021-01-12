import React from 'react'
import '../../../styles/contracts/addForm.css'

function InputDateToday(props) {
  var today = new Date()
  var dd = today.getDate()
  var mm = today.getMonth() + 1 //January is 0!
  var yyyy = today.getFullYear()
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  today = yyyy + '-' + mm + '-' + dd

  return (
    <>
      {/* <label htmlFor={props.htmlFor} style={{ marginBottom: '0rem' }}>
        {props.label}
      </label>
      <input
        required={props.required}
        type='Date'
        name={props.name}
        id={props.id}
        // className='form-control'
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        min={today}
        max={today}
        style={{ marginBottom: '1rem' }}
      /> */}

      <div className='form-group row'>
        <label
          for='inputPassword'
          className='col-sm-4 col-form-label'
          style={{ textAlign: 'right', paddingRight: 0 }}
        >
          {props.label}
        </label>
        <div className='col-sm-8' style={{ margin: 'auto' }}>
          <input
            type='Date'
            className='form-control form-control-sm contractInput'
            id='inputPassword'
            placeholder={props.placeholder}
            min={today}
            max={today}
          />
        </div>
      </div>
    </>
  )
}

export default InputDateToday
