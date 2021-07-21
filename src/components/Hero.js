import React, { Fragment } from 'react'
import './hero_styles.css'

const Hero = () => {
    return (
        <div className="hero-image-container">

            <div className='hero-container'>
                <h1 className="logo-hero">
                    Adventure Co
                </h1>
                <div className="logo-sub-header-hero">
                    get <span className="text-highlight"> outside</span> and
                    <span className="text-highlight"> explore </span>your world
                </div>
                <button className="btn-hero">Get Started</button>
            </div>
        </div>

    )
};

export default Hero;