import React from 'react'
import './Skillitem.css'
import assets from '../../../assets'
export default function Skillitem({skill}) {
    return (
        <div className="skillitem">
            <img src={skill.image} alt="" />
            <div className="Skill-graph">
                <div className="graph-upper">
                    <p>{skill.name}</p>
                    <p>{skill.percent}%</p>
                </div>
                <div className="graph-lower">
                    <div style={{width:`${skill.percent}%`}} className="fill"></div>
                </div>
            </div>
        </div>
    )
}
