import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class FeaturedProducts extends Component {
  render () {
    return (
      <div className=''>
        <Container>
          <Row>
            <Col lg={4}>
              <div className='feature d-flex'>
                <div>
                  <img
                    src='img/product-1.png'
                    alt='Nordic Chair'
                    className='mb-3'
                  />
                </div>
                <div>
                  <h5 className='feature-title'>Nordic Chair</h5>
                  <p className='feature-des'>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio.
                  </p>
                  <Link to="/product-details" className='feature-read'>Read More</Link>

                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className='feature d-flex'>
                <div>
                  <img
                    src='img/product-2.png'
                    alt='Nordic Chair'
                    className='mb-3'
                  />
                </div>
                <div>
                  <h5 className='feature-title'>Kruzo Aero Chair</h5>
                  <p className='feature-des'>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio.
                  </p>
                  <Link to="/product-details" className='feature-read'>Read More</Link>

                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className='feature d-flex'>
                <div>
                  <img
                    src='img/product-3.png'
                    alt='Nordic Chair'
                    className='mb-3'
                  />
                </div>
                <div>
                  <h5 className='feature-title'>Ergonomic Chair</h5>
                  <p className='feature-des'>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio.
                  </p>
                  <Link to="/product-details" className='feature-read'>Read More</Link>

                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default FeaturedProducts
