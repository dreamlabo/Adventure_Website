import React, { Fragment } from 'react'
import './footer_styles.css'

const Footer = () => {
    return (
        <footer className="footer">
            <ul className='footer-nav'>
                <li><a href="#">Contact</a></li>

                <li><a href="#">Careers</a></li>
                <li><a href="#">About</a></li>

            </ul>

            <ul className="footer-social-media">
                <li><a href="#"><i className="fab fa-facebook-square fa-2x"> </i></a></li>
                <li><a href="#"><i className="fab fa-instagram fa-2x"> </i> </a></li>
                <li><a href="#"><i className="fab fa-twitter-square fa-2x"> </i></a></li>

            </ul>

        </footer>
    )
};

export default Footer;