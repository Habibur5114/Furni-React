import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <Container>
          <Row>
            <Col lg={4}>
              <div className='fotter-logo mb-5'>
                <h2>Ht Shop</h2>
                <p>
                  Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                  Aliquam vulputate velit imperdiet dolor tempor tristique.
                  Pellentesque habitant
                </p>

                <div className='social-icon d-flex gap-2 mt-4'>
                  <div className='icon-wrapper'>
                    <FaFacebookF className='fs-5 m-2' />
                  </div>
                  <div className='icon-wrapper'>
                    <FaTwitter className=' fs-5 m-2' />
                  </div>
                  <div className='icon-wrapper'>
                    <FaPinterest className='m-2 fs-5' />
                  </div>
                  <div className='icon-wrapper'>
                    <FaInstagram className=' fs-5 m-2' />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={6} lg={2} className='footer'>
              <ul>
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </Col>
            <Col xs={6} lg={2} className='footer'>
              <ul>
                <li>Support</li>
                <li>Knowledge base</li>
                <li>Live chat</li>
              </ul>
            </Col>
            <Col xs={6} lg={2} className='footer'>
              <ul>
                <li>Jobs</li>
                <li>Our team</li>
                <li>Leadership</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col xs={6} lg={2} className='footer'>
              <ul>
                <li>Nordic Chair</li>
                <li>Kruzo Aero</li>
                <li>Ergonomic Chair</li>
              </ul>
            </Col>
          </Row>
          <hr className='mt-5' />
          <Row className='mt-5'>
            <Col lg={9}>
              <p className='text-center'>
                Copyright ©2025. All Rights Reserved. — Designed with love by
                Untree.co Distributed By ThemeWagon </p>
             
              
            </Col>
            <Col lg={3}>
              <div className='footer-links'>
                <Link href='#'>Terms & Conditions</Link>
                <Link href='#'>Privacy Policy</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Footer
