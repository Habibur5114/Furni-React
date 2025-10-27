import React, { Component } from 'react';
import NavbarMenu from './../Home/NavbarMenu';
import Hero from './Hero';
import Support from './../Home/Support';
import Team from './Team';
import Testimonials from './../Home/Testimonials';
import Newsletter from './../Home/Newsletter';
import Footer from './../Home/Footer';

class AboutMenu extends Component {
    render() {
        return (
            <div>
                <NavbarMenu/>
                <Hero/>
                <Support/>
                <Team/>
                <Testimonials/>
                <Newsletter/>
                <Footer/>
            </div>
        );
    }
}

export default AboutMenu;