import React from 'react';
import './Hero.css';
import herobg from '../backgrounds/herobg.mp4';
import Home from './Home';
import Explore from './Explore';
import Footer from './Footer';

const Hero = () => {
    return (
        <div className='hero-main-container'>
            <video src={herobg} autoPlay loop muted className="hero-video" />
            <div className='content'>
                <b>
                    <h1 className='hero-heading'>Explore. Discover. Adventure.</h1>
                </b>
                <p className='hero-subheading'>Your gateway to unforgettable experiences awaits</p>
                <b>
                    <p className='hero-description'>
                        Whether you're seeking thrilling adventures, relaxing retreats, or luxury accommodations,
                        we’ve got everything you need to make your journey memorable.
                        Let us help you plan your perfect getaway!
                    </p>
                </b>
            </div>
            <Home />
            <Explore />
            <Footer />
        </div>
    );
};

export default Hero;
