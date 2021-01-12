import React from 'react'
import { Col } from 'react-bootstrap'

function AddContractFormHeader() {
  return (
    <>
      <Col xs={12} md={6}>
        <h4>Zamin tech</h4>
        <h6>Avazbek Xaydarov</h6>
        <h6>Oq Yer Qishlog'i</h6>
        <h6>Rishton, Fergona 151300</h6>
        <h6>Uzbekiston</h6>
      </Col>
      <Col
        className='hidden-sm-down'
        xs={0}
        md={6}
        style={{ textAlign: 'right' }}
      >
        <h5
          style={{
            fontSize: '2.5rem',
            fontWeight: 500,
            fontFamily: 'Nunito,sans-serif',
          }}
        >
          ШАРТНОМА
        </h5>
      </Col>

      <Col sm={12}>
        <hr></hr>
      </Col>
    </>
  )
}

export default AddContractFormHeader
