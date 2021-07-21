import React, { Fragment } from 'react'
import './header_styles.css'

const Header = () => {
    return (
        <div className="header-top-container">
            <nav className="header-container" >
                <a href="" className="logo-header"> Adventure Co</a>

                <div className="right-side-header-container">
                    <li><a href="#" className="link-header">Destinations</a></li>
                    <li><a href="#" className="link-header">Guides</a></li>
                    <li><a href="#" className="link-header">About</a></li>
                    <li><a className="btn-header" >Sign Up</a></li>
                </div>

            </nav>
        </div>
    )
};

export default Header;