import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingMessage from './components/FloatingMessage'
import SEO from './components/SEO'
import './App.css'
import HomePage from './pages/HomePage'
const SchoolsPage = lazy(() => import('./pages/SchoolsPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const TrainingPage = lazy(() => import('./pages/TrainingPage'))
const SupportPage = lazy(() => import('./pages/SupportPage'))
const DonatePage = lazy(() => import('./pages/DonatePage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const ReportsPage = lazy(() => import('./pages/ReportsPage'))
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

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      // give the lazy-loaded page time to render scrollable content
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

function AppContent() {
  const { pathname } = useLocation()
  const standalone = pathname === '/donate'
  const hideFooter = standalone || pathname === '/support'

  return (
    <div className="app">
      <SEO pathname={pathname} />
      <ScrollToTop />
      {!standalone && <Header />}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schools" element={<SchoolsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/stories/:slug" element={<StoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      {!hideFooter && <Footer />}
      {!standalone && <FloatingMessage />}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AppContent />
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App