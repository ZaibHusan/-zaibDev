import React from 'react'
import "./Projectcard.css"
import assets from '../../../assets'
export default function Projectcard() {
    return (
        <div className="Projectcard">
            <div className="Project-banner">
                <img src={assets.background} alt="" />
            </div>
            <div className="Project-description">
                <h2>Project Title</h2>
                <p>Learn HTML, CSS, JavaScript and modern frameworks to build responsive websites and web applications.</p>
            </div>
            <div className="Project-technology">
                <p>html</p>
                <p>css</p>
                <p>javascript</p>
            </div>
            <div className="Project-demo">
                <button>Live Demo</button>
                <button>Github</button>
            </div>
        </div>
    )
}
