import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';


class AllBlog extends Component {
  render () {
    return (
      <div>
        <Container>
          
          <Row className='mt-5 mb-5'>
            <Col lg={3} className='mt-3'>
              <Card>
                <Card.Img variant='top' src='img/post-1.jpg' />
                <Card.Body>
                  <Card.Title>First Time Home Owner Ideas</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
            
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} className='mt-3'>
              <Card>
                <Card.Img variant='top' src='img/post-2.jpg' />
                <Card.Body>
                  <Card.Title>How To Keep Your Furniture Clean</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
            
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} className='mt-3'>
              <Card >
                <Card.Img variant='top' src='img/post-3.jpg' />
                <Card.Body>
                  <Card.Title>Small Space Furniture Apartment</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
            
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} className='mt-3'>
              <Card>
                <Card.Img variant='top' src='img/post-2.jpg' />
                <Card.Body>
                  <Card.Title>How To Keep Your Furniture Clean</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
            
                </Card.Body>
              </Card>
            </Col>
             <Col lg={3} className='mt-3'>
              <Card >
                <Card.Img variant='top' src='img/post-3.jpg' />
                <Card.Body>
                  <Card.Title>Small Space Furniture Apartment</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
            
                </Card.Body>
              </Card>
            </Col>
              <Col lg={3} className='mt-3'>
              <Card>
                <Card.Img variant='top' src='img/post-1.jpg' />
                <Card.Body>
                  <Card.Title>First Time Home Owner Ideas</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
            
                </Card.Body>
              </Card>
            </Col>
              <Col lg={3} className='mt-3'>
              <Card>
                <Card.Img variant='top' src='img/post-1.jpg' />
                <Card.Body>
                  <Card.Title>First Time Home Owner Ideas</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
            
                </Card.Body>
              </Card>
            </Col>
              <Col lg={3} className='mt-3'>
              <Card>
                <Card.Img variant='top' src='img/post-1.jpg' />
                <Card.Body>
                  <Card.Title>First Time Home Owner Ideas</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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

export default AllBlog
