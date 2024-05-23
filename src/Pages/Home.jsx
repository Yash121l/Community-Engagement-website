import React from 'react'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Testimonials from './Components/Testimonials'
import CoreTeam from './Components/CoreTeam'
import About from './Components/AboutUs'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Projects/>
      <Testimonials/>
      <CoreTeam/>
      <About/>
    </div>
  )
}

export default Home
