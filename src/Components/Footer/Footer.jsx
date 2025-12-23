import React from 'react'
import "./Footer.css"
import assets from '../../assets'
export default function Footer() {
    return (
        <div className="Footer">
            <div className="Footer-top">
                <div className="Footer_logo">
                    <span className='logo-icon'>&lt;/&gt;</span>
                    <span className='logo-text'>zaibDev</span>
                </div>
                <p>I’m a self-taught full-stack developer who builds modern, responsive, and professional websites.</p>
            </div>
            <div className="Footer-main">
                <ul>
                    <h2>Main</h2>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <ul className='flex-start'>
                    {/* Lets give title to these? */}
                    <h2>Contact</h2>
                    <li><a href="mailto:husanzaibllc@gmail.com"> <img src={assets.email} alt="" />husanzaibllc@gmail.com </a></li>
                    <li><a href="tel:03402080896"><img src={assets.iphone} alt="" />03402080896</a></li>
                </ul>
                <ul>
                    <h2>Socail</h2>
                    <li><a href="https://www.instagram.com/zeb__dev" target="_blank" rel="noreferrer"><img src={assets.instagram} alt="" />Instagram</a></li>
                    <li><a href="https://www.tiktok.com/@zeb__dev" target="_blank" rel="noreferrer"><img src={assets.tiktok} alt="" />Tiktok</a></li>
                    <li><a href="https://www.linkedin.com/in/hussan-zaib-44962b364" target="_blank" rel="noreferrer"><img src={assets.linkedin} alt="" />Linkedin</a></li>
                </ul>
            </div>
            <div className="Footer-bottom">
                <p>Copyright © 2023 Hussan Zaib. All rights reserved.</p>
            </div>
        </div>
    )
}
