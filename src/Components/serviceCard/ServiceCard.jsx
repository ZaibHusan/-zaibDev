import React from 'react'
import './ServiceCard.css'
import assets from '../../assets'
export default function ServiceCard({ service }) {
    return (
        <div className="serviceCard">
            <div className="serviceCard-img">
                <img src={assets.frontEnd} alt="" />
            </div>
            <div className="serviceCard-description">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    )
}
