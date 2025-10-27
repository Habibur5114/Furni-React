import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class Support extends Component {
  render () {
    return (
      <div className='support'>
        <Container>
          <Row>
            <Col lg={7}>
              <div className='choose-title'>
                <h2>Why Choose Us</h2>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
              </div>
              {/* Shipping support */}
              <div className='shipping'>
                <Row>
                  <Col xs={6} lg={6}>
                    <div className='shipping-icon'>
                    
                      <img src='img/truck.svg' alt=''/>
                      <h6>Fast & Free Shipping</h6>
                      <p>
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                        aliquet velit. Aliquam vulputate.
                      </p>
                    </div>
                  </Col>

                  <Col xs={6} lg={6}>
                    <div className='shipping-icon'>
                      <img src='img/truck.svg' alt='' />
                      <h6>Easy to Shop</h6>
                      <p>
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                        aliquet velit. Aliquam vulputate.
                      </p>
                    </div>
                  </Col>

                  <Col xs={6} lg={6} className='mt-4'>
                    <div className='shipping-icon'>
                      <img src='img/bag.svg' alt='' />
                      <h6>24/7 Support</h6>
                      <p>
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                        aliquet velit. Aliquam vulputate.
                      </p>
                    </div>
                  </Col>

                  <Col xs={6} lg={6} className='mt-4'>
                    <div className='shipping-icon'>
                      <img src='img/return.svg' alt='' />
                      <h6>Hassle Free Returns</h6>
                      <p>
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                        aliquet velit. Aliquam vulputate.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={5}>
              <div className='support-img'>
                <img src='img/why-choose-us-img.jpg' alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Support
