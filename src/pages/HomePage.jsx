import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import MissionVision from '../components/MissionVision'
import About from '../components/About'
import Institutions from '../components/Institutions'
import Doctors from '../components/Doctors'
import Testimonials from '../components/Testimonials'

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    }
  }, [location])

  return (
    <main>
      <Hero />
      <About />
      <MissionVision />
      <Institutions />
      <Doctors />
      <Testimonials />
    </main>
  )
}

export default HomePage
