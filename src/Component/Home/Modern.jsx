import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'


class Modern extends Component {
  render () {
    return (
      <div className='modern'>
        <Container>
          <Row>
            <Col lg={7}>
              <div className='d-flex'>
                <div className='img-grap-1 m-2'>
                  <img src='img/img-grid-1.jpg' alt='' />
                </div>
                <div className='img-grap-2 m-2'>
                  <img src='img/img-grid-2.jpg' alt='' />
                </div>
                <div className='img-grap-3 mt-4 m-2'>
                  <img src='img/img-grid-3.jpg' alt='' />
                </div>
              </div>
            </Col>

            <Col lg={5}>
              <div className='modern-title'>
                <h2>We Help You Make Modern Interior Design</h2>
                <p>
                  Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                  Aliquam vulputate velit imperdiet dolor tempor tristique.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada
                </p>

                <Row className='mt-5'>
                  <Col xs={6} lg={6}>
                    <div className='d-flex'>
                      <li>Donec vitae odio quis nisl dapibus malesuada</li>
                    </div>
                  </Col>
                  <Col xs={6} lg={6}>
                    <div className='d-flex'>
                      <li>Donec vitae odio quis nisl dapibus malesuada</li>
                    </div>
                  </Col>
                  <Col xs={6} lg={6}>
                    <div className='d-flex mt-4'>
                      <li>Donec vitae odio quis nisl dapibus malesuada</li>
                    </div>
                  </Col>
                  <Col xs={6} lg={6}>
                    <div className='d-flex mt-4'>
                      <li>Donec vitae odio quis nisl dapibus malesuada</li>
                    </div>
                  </Col>
                </Row>

                <Button className="btn btn-dark m-2 hero-btn mt-5">Explore</Button>
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Modern
