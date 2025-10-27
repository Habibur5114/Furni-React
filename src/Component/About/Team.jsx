import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

class Team extends Component {
  render () {
    return (
      <div className='team'>
        <Container>
          <div className='text-center pb-5'>
            <h2>Our Team</h2>
          </div>
          <Row>
            <Col lg={3}>
              <Card className='m-1 mt-4'>
                <img src="img/person_1.jpg" alt="" />
                <Card.Body>
                  <Card.Title >Lawson Arnold</Card.Title>
                  <p className='team-title'>CEO, Founder, Atty.</p>
                  <Card.Text className='team-des'>
                    Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className='m-1 mt-4'>
                <img src="img/person_2.jpg" alt="" />
                <Card.Body>
                  <Card.Title >Jeremy Walker</Card.Title>
                  <p className='team-title'>CEO, Founder, Atty.</p>
                  <Card.Text className='team-des'>
                    Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className='m-1 mt-4'>
                <img src="img/person_3.jpg" alt="" />
                <Card.Body>
                  <Card.Title >Patrik White</Card.Title>
                  <p className='team-title'>CEO, Founder, Atty.</p>
                  <Card.Text className='team-des'>
                    Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className='m-1 mt-4'>
                <img src="img/person-1.png" alt="" />
                <Card.Body>
                  <Card.Title >Kathryn Ryan</Card.Title>
                  <p className='team-title'>CEO, Founder, Atty.</p>
                  <Card.Text className='team-des'>
                    Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Team
