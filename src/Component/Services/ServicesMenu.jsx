import React, { Component } from 'react';
import NavbarMenu from './../Home/NavbarMenu';
import Hero from './Hero';
import Support from './Support';
import Product from './../Home/Product';
import Testimonials from './../Home/Testimonials';
import Newsletter from './../Home/Newsletter';
import Footer from './../Home/Footer';

class ServicesMenu extends Component {
    render() {
        return (
            <div>
               <NavbarMenu/>
               <Hero/>
               <Support/>
               <Product/>
               <Testimonials/>
               <Newsletter/>
              <Footer/>
            </div>
        );
    }
}

export default ServicesMenu;