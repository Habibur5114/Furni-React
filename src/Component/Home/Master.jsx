import React, { Component } from 'react';
import NavbarMenu from './NavbarMenu';
import Hero from './Hero';
import Product from './Product';
import Support from './Support';
import Modern from './Modern';
import FeaturedProducts from './FeaturedProducts';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Newsletter from './Newsletter';
import Footer from './Footer';

class Master extends Component {
    render() {
        return (
            <div >
               <NavbarMenu/>
               <Hero/>
               <Product/>
               <Support/>
               <Modern/>
               <FeaturedProducts/>
               <Testimonials/>
               <Blog/>
               <Newsletter/>
               <Footer/>
               
            </div>
        );
    }
}

export default Master;