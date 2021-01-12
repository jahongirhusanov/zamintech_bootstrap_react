import React from 'react'
import { Col, Form } from 'react-bootstrap'

function FormControl(props) {
  return (
    <>
      <Col sm={6} style={{ margin: 'auto' }}>
        {props.label}
      </Col>
      <Col sm={6} style={{ marginBottom: '0.5rem' }}>
        <Form.Control
          size='sm'
          type='text'
          defaultValue={props.defaultValue}
          disabled={props.disabled}
        />
      </Col>
    </>
  )
}

export default FormControl
