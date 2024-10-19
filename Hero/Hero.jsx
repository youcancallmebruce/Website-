import React from 'react';
import './Hero.css'
import hero_icon from '../Assets/hero.jpeg';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>NEWS ARRIVAL ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                    </div>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collectiion</div>
                </div>
            </div>
            <div className='hero-right'>
                <img src={hero_icon} alt="" className='small-image' />
            </div>
        </div>
    )
}

export default Hero