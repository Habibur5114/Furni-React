// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router";
import ShopMenu from './Component/Shop/ShopMenu';
import AboutMenu from './Component/About/AboutMenu';
import ServicesMenu from './Component/Services/ServicesMenu';
import BlogMenu from './Component/Blog/BlogMenu';
import ContactMenu from './Component/Contact/ContactMenu';


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/shop" element={<ShopMenu />} />
      <Route path="/about" element={<AboutMenu />} />
      <Route path="/services" element={<ServicesMenu/>} />
      <Route path="/blog" element={<BlogMenu/>} />
      <Route path="/contact" element={<ContactMenu/>} />
    </Routes>
  </BrowserRouter>
)
