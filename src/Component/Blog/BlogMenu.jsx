import React, { Component } from 'react';
import NavbarMenu from './../Home/NavbarMenu';
import Hero from './Hero';
import AllBlog from './AllBlog';
import Testimonials from './../Home/Testimonials';
import Newsletter from './../Home/Newsletter';
import Footer from './../Home/Footer';
import SidebarMenu from '../../Backend/Layouts/SidebarMenu';


class BlogMenu extends Component {
    render() {
        return (
            <div>
                <NavbarMenu/>
               <Hero/>
               <AllBlog/>
               <Testimonials/>
               <Newsletter/>
              <Footer/>
             
              
            </div>
        );
    }
}

export default BlogMenu;