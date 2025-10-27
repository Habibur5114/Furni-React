import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

class Form extends Component {
  render () {
    return (
      <div className='Contactform'>
        <Container>
          <Row className='justify-content-center'>
            <Col lg={8}>
              <form action=''>
                <Row className='g-3'>
                  <Col md={6}>
                    <label for=''>First Name</label>
                    <input
                      type='text'
                      className='form-control mt-2'
                      placeholder='First Name'
                    />
                  </Col>
                  <Col md={6}>
                    <label for=''>Last Name</label>
                    <input
                      type='text'
                      className='form-control mt-2'
                      placeholder='Last Name'
                    />
                  </Col>
                  <Col md={12}>
                    <label for=''>Email</label>
                    <input
                      type='email'
                      className='form-control mt-2'
                      placeholder='habiburrahman@hmail.com'
                    />
                  </Col>
                  <Col md={12}>
                    <label for=''>Message</label>
                    <textarea
                      name=''
                      id=''
                      cols='10'
                      rows='5'
                      className='form-control mt-2'
                      placeholder='Write your message here...'
                    ></textarea>
                  </Col>
                
                </Row>
                <Button  variant="btn btn-dark mt-3 hero-btn" >Send Message</Button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Form
