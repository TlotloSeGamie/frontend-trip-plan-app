import React from 'react';
import './Hero.css';
import herobg from '../backgrounds/herobg.mp4';


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
                <button className='explore-btn'>Discover Now</button>
                <p className='hero-footer'>
                    Start your adventure today and create memories that will last a lifetime.
                </p>
            </div>
        </div>
    );
};

export default Hero;
