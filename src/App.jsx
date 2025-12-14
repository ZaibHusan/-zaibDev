import React from 'react'
import Topbar from './Components/Topbar/Topbar'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Home from './pages/Home/Home'

export default function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Home />
    </div>
  )
}
