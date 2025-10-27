import React, { Component } from 'react';
import NavbarMenu from './../Home/NavbarMenu';
import Hero from './Hero';
import Product from './Product';
import Newsletter from './../Home/Newsletter';
import Footer from './../Home/Footer';


class ShopMenu extends Component {
    render() {
        return (
            <div>
                <NavbarMenu/>
               <Hero/>
               <Product/>
               <Newsletter/>
               <Footer/>
            </div>
        );
    }
}

export default ShopMenu;