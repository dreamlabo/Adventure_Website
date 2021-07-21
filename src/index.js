import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Destinations from "./components/destinations/Destinations";
import Footer from "./components/Footer";
import Testimonial from "./components/testimonials/Testimonial";


ReactDOM.render(
  <React.StrictMode>

        <Header/>
        <Hero/>
        <Destinations/>
        <Testimonial/>
        <Footer/>



  </React.StrictMode>,
  document.getElementById('root')
);


