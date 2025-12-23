import React from 'react'
import assets from '../../assets';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css'
export default function Hero() {
    const services = ["E-commerce", "Business Website", "web tools"];
    return (
        <div className="Hero">
            <div className="Hero-box">
                <div className="Hero-greeting">
                    <h1><span>Hi, I'm </span>Zaib Hussan</h1>
                    <h2>
                        Full-Stack Developer&nbsp;
                        <span>
                            <Typewriter
                                words={[
                                    "building web apps",
                                    "solving problems",
                                    "responsive design",
                                    "React & Node.js",
                                    "ideas into code",
                                    "scalable backends",
                                    "great UX"
                                ]}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>

                </div>
                <p className="Hero-description">I’m a self-taught full-stack developer who builds modern, responsive, and professional websites.
                    From clean user interfaces to powerful backend systems, I create websites that are fast, reliable,
                    and designed for real users.
                </p>
                <div className="Hero-cta">
                    <button>Let's Talk</button>
                    <button>Projects</button>
                </div>
                <div className="my-experience">
                    <ul>
                        <li>
                            <h2>50+</h2>
                            <p>Projects</p>
                        </li>
                        <li>
                            <h2>1+</h2>
                            <p>Years</p>
                        </li>
                        <li>
                            <h2>5+</h2>
                            <p>Happy Clients</p>

                        </li>
                        <li><h2>5+</h2>
                            <p>Projects</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
