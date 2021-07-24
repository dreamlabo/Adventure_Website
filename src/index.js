import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Activities from "./components/activities/Activities";
import Footer from "./components/Footer";
import Testimonials from "./components/testimonials/Testimonials";


ReactDOM.render(
  <React.StrictMode>

        <Header/>
        <Hero/>
        <Activities/>
        <Testimonials/>
        <Footer/>



  </React.StrictMode>,
  document.getElementById('root')
);


