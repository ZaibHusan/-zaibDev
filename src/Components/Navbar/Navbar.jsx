import React from 'react'
import './Navbar.css'
export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar_left">
                <span className='logo-icon'>&lt;/&gt;</span>
                <span className='logo-text'>zaibDev</span>
            </div>
            <div className="Navbar_maddle">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="Navbar_right">
                <button><span className='live-dot'></span>Let’s Talk</button>
            </div>
        </div>
    )
}
