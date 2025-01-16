import React, { useState, useEffect } from 'react';
import './Navbar.css';


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const viewportHeight = window.innerHeight;
            const scrollThreshold = (scrollHeight - viewportHeight) * 0.01; 
            
            if (window.scrollY > scrollThreshold) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return (
        <div className={`navbar-main-container ${scrolled ? 'scrolled' : ''}`}>
            <div className='navbar-container'>
                <div className='logo'>
                    Weather Trip Planner
                </div>
                <div className='nav-links'>
                    <a href="/" className='nav-link'>HOME</a>
                    <a href="/" className='nav-link'>ACTIVITIES</a>
                    <a href="/" className='nav-link'>EXPLORE</a>
                    <a href="/about" className='nav-link'>ABOUT</a>
                    <a href="/contact" className='nav-link'>CONTACT</a>
                </div>
                <div className='auth-links'>
                    <a href="/login" className='auth-link'>LOGIN</a>
                    <a href="/signup" className='auth-link'>SIGN UP</a>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;
