import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../images/gtahidi_logo.png'; // You can update this to the path of your logo.

function Navbar() {
    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${nav ? "active" : ""}`}>
            <div className="container">
                {/* Brand */}
                <a className="navbar-brand" href="index.html">
                    <img width="50px" src={logo} alt="" />
                </a>

                {/* Toggler/collapsibe Button */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <i className="fas fa-bars"></i>
                </button>

                {/* Navbar links */}
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="main" smooth={true} duration={1000}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="features" smooth={true} duration={1000}>Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="howitworks" smooth={true} duration={1000}>How it Works</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="testimonials" smooth={true} duration={1000}>Testimonials</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="pricing" smooth={true} duration={1000}>Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact" smooth={true} duration={1000}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
