import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class Product extends Component {
  render () {
    return (
      <div className='product'>
        <Container>
          <Row>
            {/* <Col lg={4}>
              <div>
                <h2>Crafted with excellent material.</h2>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.{' '}
                </p>
                <Button className='btn btn-dark m-2 hero-btn'>Explore</Button>
              </div>
            </Col> */}

            <Row>
              <Col lg={3} className='product-card mt-4'>
                <Card className='w-100'>
                  <Card.Img variant='top' src='img/product-1.png' />
                  <div className='text-center my-5'>
                    <h5 className='product-title '>Nordic Chair</h5>
                    <strong>$550</strong>
                  </div>
                </Card>
              </Col>
              <Col lg={3} className='product-card mt-4'>
                <Card className='w-100'>
                  <Card.Img variant='top' src='img/product-2.png' />
                  <div className='text-center my-5'>
                    <h5 className='product-title '>Kruzo Aero Chair</h5>
                    <strong>$780</strong>
                  </div>
                </Card>
              </Col>
              <Col lg={3} className='product-card mt-4'>
                <Card className='w-100'>
                  <Card.Img variant='top' src='img/product-3.png' />
                  <div className='text-center my-5'>
                    <h5 className='product-title '>Ergonomic Chair</h5>
                    <strong>$430</strong>
                  </div>
                </Card>
              </Col>
              <Col lg={3} className='product-card mt-4'>
                <Card className='w-100'>
                  <Card.Img variant='top' src='img/product-1.png' />
                  <div className='text-center my-5'>
                    <h5 className='product-title '>Nordic Chair</h5>
                    <strong>$550</strong>
                  </div>
                </Card>
              </Col>
              <Col lg={3} className='product-card mt-4'>
                <Card className='w-100'>
                  <Card.Img variant='top' src='img/product-2.png' />
                  <div className='text-center my-5'>
                    <h5 className='product-title '>Kruzo Aero Chair</h5>
                    <strong>$780</strong>
                  </div>
                </Card>
              </Col>
              <Col lg={3} className='product-card mt-4'>
                <Card className='w-100'>
                  <Card.Img variant='top' src='img/product-3.png' />
                  <div className='text-center my-5'>
                    <h5 className='product-title '>Ergonomic Chair</h5>
                    <strong>$430</strong>
                  </div>
                </Card>
              </Col>
              <Col lg={3} className='product-card mt-4'>
                <Card className='w-100'>
                  <Card.Img variant='top' src='img/product-1.png' />
                  <div className='text-center my-5'>
                    <h5 className='product-title '>Nordic Chair</h5>
                    <strong>$550</strong>
                  </div>
                </Card>
              </Col>
              <Col lg={3} className='product-card mt-4'>
                <Card className='w-100'>
                  <Card.Img variant='top' src='img/product-2.png' />
                  <div className='text-center my-5'>
                    <h5 className='product-title '>Kruzo Aero Chair</h5>
                    <strong>$780</strong>
                  </div>
                </Card>
              </Col>
              
            </Row>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Product
