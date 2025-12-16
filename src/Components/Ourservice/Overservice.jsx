import React from 'react'
import './Ouerservice.css'
import ServiceCard from '../serviceCard/ServiceCard'
import { services } from '../../assets'
export default function Overservice() {
    return (
        <div className="Ourservice">
            <div className="Service-title">
                <h2><span>What I</span> <span>Offer?</span></h2>
            </div>
            <div className="Service-card">
                {services.map((service, index) => (
                    <ServiceCard service={service} />
                ))}
            </div>
        </div>
    )
}
