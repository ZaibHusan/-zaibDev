import React from 'react'
import assets from '../../assets';
import './Hero.css'
export default function Hero() {
    const services = ["E-commerce", "Business Website", "web tools"];
    return (
        <div className="Hero">
            <div className="greeting">
                <div className="image-continer">
                    <img src={assets.zaibprofile} alt="" />
                </div>
                <h1>Hi, I’m Zaib Husan</h1>
            </div>
            <h2>Full-Stack Developer | Building Real Web Applications</h2>
            <div className="Hero-button">
                <button>Let’s Talk</button>
                <button>Download CV</button>
            </div>
        </div>
    )
}
