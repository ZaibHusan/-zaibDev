import React from 'react'
import './Topbar.css'
import assets from '../../assets'

export default function Topbar() {
    return (
        <div className="Topbar">
            <div className="Topbar_right">
               <ul>
                <li><a href="mailto:husanzaibllc@gmail.com"> <img src={assets.email} alt="" />husanzaibllc@gmail.com </a></li>
                <li><a href="tel:03402080896"><img src={assets.iphone} alt="" />03402080896</a></li>
               </ul>
            </div>
            <div className="Topbar_left">
                <nav>
                    <a href="https://www.instagram.com/zeb__dev" target="_blank" rel="noreferrer"><img src={assets.instagram} alt="" /></a>
                    <a href="https://www.tiktok.com/@zeb__dev" target="_blank" rel="noreferrer"><img src={assets.tiktok} alt="" /></a>
                    <a href="https://www.linkedin.com/in/hussan-zaib-44962b364" target="_blank" rel="noreferrer"><img src={assets.linkedin} alt="" /></a>
                </nav>
            </div>
        </div>
    )

}
