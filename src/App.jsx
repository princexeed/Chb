import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const SchoolsPage = lazy(() => import('./pages/SchoolsPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const TrainingPage = lazy(() => import('./pages/TrainingPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const StoryPage = lazy(() => import('./pages/StoryPage'))
const StoriesPage = lazy(() => import('./pages/StoriesPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div style={{ padding: '120px 24px', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '12px', color: 'var(--color-text)' }}>Something went wrong</h2>
      <p style={{ color: 'var(--color-text-light)', marginBottom: '24px', maxWidth: '500px', lineHeight: '1.6' }}>{error.message}</p>
      <button onClick={resetErrorBoundary} className="btn btn-primary" style={{ cursor: 'pointer' }}>
        Try Again
      </button>
    </div>
  )
}

function PageLoader() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '40px', height: '40px', border: '3px solid var(--color-border)', borderTopColor: 'var(--color-primary)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="app">
          <Header />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/schools" element={<SchoolsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/training" element={<TrainingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/stories" element={<StoriesPage />} />
              <Route path="/stories/:slug" element={<StoryPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
