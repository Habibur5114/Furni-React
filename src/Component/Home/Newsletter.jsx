import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { FaRegEnvelope } from 'react-icons/fa'

class Newsletter extends Component {
  render () {
    return (
      <div className='newspaper'>
        <Container>
          <Row>
            <Col lg={8}>
              <div className='d-flex gap-2 new'>
                <FaRegEnvelope style={{ width: '16px', height: '16px' }} />
                <h6>Subscribe to Newsletter</h6>
              </div>
              
              <div className='d-flex flex-wrap flex-md-nowrap gap-2 mt-3'>
                <input
                  type='text'
                  className='form-control custom-height flex-grow-1'
                  placeholder='Enter your name'
                />
                <input
                  type='text'
                  className='form-control custom-height flex-grow-1'
                  placeholder='Enter your email'
                />
                <button className='btn btn-warning px-4 custom-height'>
                  Subscribe
                </button>
              </div>
            </Col>
            <Col lg={4}>
              <div className='sofa'>
                <img src='img/sofa.png' alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Newsletter
