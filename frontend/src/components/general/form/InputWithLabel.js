import React from 'react'

function InputWithLabel(props) {
  return (
    <>
      <label htmlFor={props.htmlFor} style={{ marginBottom: '0rem' }}>
        {props.label}
      </label>
      <input
        required={props.required}
        type={props.type}
        name={props.name}
        id={props.id}
        className='form-control'
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        min={props.min}
        max={props.max}
        pattern={props.pattern}
        style={{ marginBottom: '1rem' }}
        disabled={props.disabled}
      />
    </>
  )
}

export default InputWithLabel
