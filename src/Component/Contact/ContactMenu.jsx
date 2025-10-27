import React, { Component } from 'react';
import NavbarMenu from './../Home/NavbarMenu';
import Hero from './Hero';
import Info from './Info';
import Form from './Form';
import Newsletter from './../Home/Newsletter';
import Footer from './../Home/Footer';



class ContactMenu extends Component {
    render() {
        return (
            <div>
              <NavbarMenu/>
              <Hero/>
              <Info/>
              <Form/>
              <Newsletter/>
              <Footer/>
            </div>
        );
    }
}

export default ContactMenu;