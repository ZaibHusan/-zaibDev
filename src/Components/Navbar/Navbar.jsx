import React, { useEffect, useState } from 'react'
import './Navbar.css'
import assets from '../../assets'
export default function Navbar() {
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        if (toggle) {
            window.scroll(0, 0)
            document.documentElement.style.overflow = 'hidden'
            document.body.style.overflow = 'hidden'
        } else {
            document.documentElement.style.overflow = ''
            document.body.style.overflow = ''
        }
    }, [toggle])


    const Navigatewhatssapp = () => {
        window.open('https://wa.me/923402080896')
    }
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
                <button onClick={Navigatewhatssapp}><span className='live-dot'></span>Let’s Talk</button>
                <div className="Navbar_menu">
                    <img onClick={() => setToggle(!toggle)} src={assets.sidebar} alt="" />
                </div>
            </div>
            {toggle && <div className="Navbar_toggle">
                <div className="Navbar-toggle-left"></div>
                <div className="Navbar-toggle-right">
                    <div className="toggle-button">
                        <button onClick={() => setToggle(!toggle)}><img src={assets.close} alt="" /></button>
                    </div>
                    <div className="toggle-logo">
                        <span className='logo-icon'>&lt;/&gt;</span>
                        <span className='logo-text'>zaibDev</span>
                    </div>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="toggle-buttons">
                        <button onClick={Navigatewhatssapp}><span className='live-dot'></span>Let’s Talk</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}
