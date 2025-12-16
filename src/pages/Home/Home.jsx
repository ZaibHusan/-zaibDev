import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Skillset from '../../Components/Skillset/Skillset'
import Overservice from '../../Components/Ourservice/Overservice'
import Project from '../../Components/Project/Project'
import Gitintouch from '../../Components/Getintouch/Gitintouch'
import Footer from '../../Components/Footer/Footer'

export default function Home() {
    return (
        <div>
            <Hero />
            <hr />
            <Skillset />
            <Overservice />
            <hr />
            <Project />
            <Gitintouch />
            <Footer />
        </div>
    )
}
