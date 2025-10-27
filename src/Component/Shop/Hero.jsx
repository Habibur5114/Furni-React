import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
class Hero extends Component {
  render () {
    return (
      <div className='navbar-here'>
        <Container>
          <Row className='hero'>
            <Col lg={6}>
              <div>
                <h1>Shop the Latest Arrivals</h1>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
                <div className='mt-5 flex gap-3'>
                   <Button className='btn btn-warning m-2 hero-btn' >Shop Now </Button>
                   <Button  variant="outline-light m-2 hero-btn" >Explore</Button>
        
                </div>
              </div>
            </Col>
            <Col lg={6} className=''>
            <div className='hero2'>
              <img src="/img/couch.png" alt="My Photo" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Hero
