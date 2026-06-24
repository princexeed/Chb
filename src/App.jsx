import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SchoolsPage from './pages/SchoolsPage'
import SupportServicesPage from './pages/SupportServicesPage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import TrainingPage from './pages/TrainingPage'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schools" element={<SchoolsPage />} />
          <Route path="/support-services" element={<SupportServicesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
