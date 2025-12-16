import React from 'react'
import "./Project.css"
import Projectcard from './Project-card/Projectcard'
export default function Project() {
    return (
        <div className="Project">
            <div className="Project-title">
                <h2><span>My</span> <span>Projects</span></h2>
            </div>
            <div className="Project-card">
                <Projectcard />
                <Projectcard />
                <Projectcard />
            </div>
        </div>
    )
}
