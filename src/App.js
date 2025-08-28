import React from 'react'
import HeroSection from './pages/HeroSection'
import Splitter from './pages/Splitter'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Testimonals from './pages/Testimonals'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Explore from './pages/Explore'
import Footer from './components/Layout/Footer'

export default function App() {
  return (
    <div style={{width:"100%",overflow:"hidden"}}>
      <HeroSection/>
      <Splitter/>
      <AboutUs/>
      <Services/>
      <Projects/>
      <Testimonals/>
      <Blog/>
      <Contact/>
      <Explore/>
      <div style={{borderTop:"2px solid white" ,marginTop:10,marginBottom:10}}/>
      <Footer/>
    </div>
  )
}
