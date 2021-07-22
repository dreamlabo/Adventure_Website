import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Activities from "./components/activities/Activities";
import Footer from "./components/Footer";
import Testimonial from "./components/testimonials/Testimonial";


ReactDOM.render(
  <React.StrictMode>

        <Header/>
        <Hero/>
        <Activities/>
        <Testimonial/>
        <Footer/>



  </React.StrictMode>,
  document.getElementById('root')
);


