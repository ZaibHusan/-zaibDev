import React from 'react'
import "./Gitintouch.css"
import assets from '../../assets'
export default function Gitintouch() {
    return (
        <div className="Gitintouch">
            <h1>Get In Touch</h1>
            <div className="Gitintouch-detail">
                <div className="Gitintouch-left">
                    <p>If you have any work from me or any types of quries related to my services. Don't hesitate to contact me </p>
                    <div className="gmail">
                        <img src={assets.email} alt="" />
                        <a href="mailto:husanzaibllc@gmail.com">husanzaibllc@gmail.com</a>
                    </div>
                    <div className="phone">
                        <img src={assets.iphone} alt="" />
                        <a href="tel:03402080896">03402080896</a>
                    </div>
                    <div className="location">
                        <img src={assets.location} alt="" />
                        <p>Islamabad, Pakistan</p>
                    </div>
                    <div className="social-link">
                        <button>linkdin</button>
                        <button>Github</button>
                        <button>WhatssAPP</button>
                    </div>
                </div>
                <div className="Gitintouch-right">
                    <form action="">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                        <button className='send'>Send Message</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
