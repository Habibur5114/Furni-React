import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FaUser } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

class NavbarMenu extends Component {
  render () {
    return (
      <div>
        <Navbar collapseOnSelect expand='lg' className='navbar-here'>
          <Container>
            <Navbar.Brand href='#home'>
              <h2 style={{ color: 'white' }}>Furni.</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'></Nav>
              <Nav>
                <Nav.Link as={Link} to='/' className='nav-item-custom'>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to='/shop' className='nav-item-custom'>
                  Shop
                </Nav.Link>
                <Nav.Link as={Link} to='/about' className='nav-item-custom'>
                   About
                </Nav.Link>
                <Nav.Link as={Link} to='/services' className='nav-item-custom'>
                    Services
                </Nav.Link>
                <Nav.Link as={Link} to='/blog' className='nav-item-custom'>
                    Blog
                </Nav.Link>
                <Nav.Link as={Link} to='/contact' className='nav-item-custom'>
                    Contact
                </Nav.Link>
                <Nav.Link href='#deets' className='nav-item-custom'>
                  <FaUser size={16} />
                </Nav.Link>
                <Nav.Link href='#deets' className='nav-item-custom'>
                  <FaShoppingCart size={16} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default NavbarMenu
