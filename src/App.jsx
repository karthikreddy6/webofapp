import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QueueVsBuvva from './components/QueueVsBuvva'
import InteractiveAppTour from './components/InteractiveAppTour'
import AppScreensShowcase from './components/AppScreensShowcase'
import FeaturesGrid from './components/FeaturesGrid'
import CanteenPartnerSection from './components/CanteenPartnerSection'
// import StudentReviews from './components/StudentReviews'
import GooglePlayDownload from './components/GooglePlayDownload'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import DetailedHowItWorks from './pages/DetailedHowItWorks'
import { PLAY_STORE_URL } from './constants'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    // Listen for hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase()
      if (hash.includes('privacy')) {
        setCurrentPage('privacy')
      } else if (hash.includes('terms')) {
        setCurrentPage('terms')
      } else if (hash.includes('how-it-works-guide') || hash.includes('guide')) {
        setCurrentPage('how-it-works')
      } else if (hash === '' || hash === '#') {
        setCurrentPage('home')
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigatePage = (page) => {
    setCurrentPage(page)
    if (page === 'privacy') {
      window.location.hash = '#/privacy'
    } else if (page === 'terms') {
      window.location.hash = '#/terms'
    } else if (page === 'how-it-works') {
      window.location.hash = '#/how-it-works-guide'
    } else {
      window.location.hash = '#'
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDownloadClick = () => {
    window.open(PLAY_STORE_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-800 flex flex-col font-sans antialiased selection:bg-[#FF5200] selection:text-white">
      <Navbar
        onDownloadClick={handleDownloadClick}
        onNavigatePage={handleNavigatePage}
        currentPage={currentPage}
      />
      
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <Hero
              onDownloadClick={handleDownloadClick}
              onNavigatePage={handleNavigatePage}
            />
            <InteractiveAppTour
              onNavigatePage={handleNavigatePage}
            />
            <AppScreensShowcase />
            <QueueVsBuvva />
            <FeaturesGrid />
            {/* Canteen partner section hidden per user request */}
            {/* <CanteenPartnerSection /> */}
            {/* Reviews hidden - fresh app with early access launch */}
            {/* <StudentReviews /> */}
            <GooglePlayDownload />
          </>
        )}

        {currentPage === 'how-it-works' && (
          <DetailedHowItWorks
            onNavigateHome={() => handleNavigatePage('home')}
            onDownloadClick={handleDownloadClick}
          />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicy
            onNavigateHome={() => handleNavigatePage('home')}
          />
        )}

        {currentPage === 'terms' && (
          <TermsAndConditions
            onNavigateHome={() => handleNavigatePage('home')}
          />
        )}
      </main>

      <Footer
        onDownloadClick={handleDownloadClick}
        onNavigatePage={handleNavigatePage}
      />
    </div>
  )
}
