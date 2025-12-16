import React from 'react'
import './Skillset.css'
import Skillitem from './Skilitem/skillitem'
import { backendSkills, frontendSkills } from '../../assets'
export default function Skillset() {
    return (
        <div className="Skillset">
            <div className="Skilltitle">
                <h1>My Skills Set</h1>
                <h2><span>MERN</span> Stack Developer building full-stack web applications.</h2>
            </div>
            <div className="Skillset-list">
                <div className="Skillset-list-left">
                    <div className="list-title">
                        <h1>Frontend</h1>
                    </div>
                    <div className="Skillset-list-left-list">
                      {frontendSkills.map((skill,index) => (
                        <Skillitem skill={skill}  key={index}/>
                      ))}
                    </div>
                </div>
                <div className="skillset-list-right">
                    <div className="list-title">
                        <h1>Backend</h1>
                    </div>
                    <div className="Skillset-list-right-list">
                     {backendSkills.map((skill,index) => (
                        <Skillitem skill={skill}  key={index}/>
                     ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
