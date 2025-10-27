import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

class Info extends Component {
  render () {
    return (
      <div className='info'>
        <Container>
          <Row className='justify-content-center'>
            <Col lg={8}>
              <Row>
                <Col lg={4}>
                  <div className='d-flex gap-3 mt-3'>
                    <div className='info-icon text-center'>
                      <FaMapMarkerAlt  className='mt-2'/>
                    </div>
                    <p >43 Raymouth Rd. Baltemoer, London 3910</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className='d-flex gap-3 mt-3'>
                    <div className='info-icon text-center'>
                     <FaEnvelope className='mt-2'/>
                    </div>
                    <p>info@yourdomain.com</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className='d-flex gap-3 mt-3'>
                    <div className='info-icon text-center'>
                      <FaPhoneAlt className='mt-2'/>
                    </div>
                    <p>+1 294 3925 3939</p>
                  </div>
                </Col>
                
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Info
