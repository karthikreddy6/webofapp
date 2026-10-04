import React, { useState, useEffect } from 'react'
import { Download, Menu, X, ArrowUpRight, BookOpen } from 'lucide-react'
import { PLAY_STORE_URL } from '../constants'

export default function Navbar({ onDownloadClick, onNavigatePage, currentPage }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (target) => {
    setMobileMenuOpen(false)
    if (currentPage !== 'home') {
      onNavigatePage('home')
      setTimeout(() => {
        const el = document.querySelector(target)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const el = document.querySelector(target)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-md shadow-slate-200/50'
            : 'bg-white/85 backdrop-blur-md border border-slate-200/60 shadow-sm'
        }`}
      >
        {/* Brand Logo */}
        <button
          onClick={() => onNavigatePage('home')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <img
            src="/images/logo.png"
            alt="Buvva - College Food Ordering"
            className="h-11 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
          />
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <button
            onClick={() => handleNavClick('#how-it-works')}
            className="hover:text-[#FF5200] transition-colors cursor-pointer"
          >
            How It Works
          </button>
          <button
            onClick={() => onNavigatePage('how-it-works')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${
              currentPage === 'how-it-works'
                ? 'bg-orange-100 text-[#FF5200]'
                : 'text-orange-600 hover:bg-orange-50'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>App Guide</span>
          </button>
          <button
            onClick={() => handleNavClick('#comparison')}
            className="hover:text-[#FF5200] transition-colors cursor-pointer"
          >
            Queue vs Buvva
          </button>
          <button
            onClick={() => handleNavClick('#features')}
            className="hover:text-[#FF5200] transition-colors cursor-pointer"
          >
            Features
          </button>
        </div>

        {/* Google Play CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onDownloadClick}
            className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF7A30] to-[#FF5200] hover:from-[#FF5200] hover:to-[#E64000] shadow-md shadow-orange-500/25 hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            <span>Get on Google Play</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#FF5200]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200 p-5 shadow-2xl flex flex-col gap-3.5 animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => handleNavClick('#how-it-works')}
            className="text-left text-base font-semibold text-slate-800 hover:text-[#FF5200] py-1"
          >
            How It Works
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              onNavigatePage('how-it-works')
            }}
            className="text-left text-base font-bold text-[#FF5200] flex items-center gap-2 py-1"
          >
            <BookOpen className="w-4 h-4" />
            <span>Detailed App Workflow Guide</span>
          </button>
          <button
            onClick={() => handleNavClick('#comparison')}
            className="text-left text-base font-semibold text-slate-800 hover:text-[#FF5200] py-1"
          >
            Queue vs Buvva
          </button>
          <button
            onClick={() => handleNavClick('#features')}
            className="text-left text-base font-semibold text-slate-800 hover:text-[#FF5200] py-1"
          >
            Features
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              onNavigatePage('privacy')
            }}
            className="text-left text-sm text-slate-500 hover:text-slate-800 py-1"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              onNavigatePage('terms')
            }}
            className="text-left text-sm text-slate-500 hover:text-slate-800 py-1"
          >
            Terms & Conditions
          </button>
          <hr className="border-slate-200 my-1" />
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              setMobileMenuOpen(false)
              if (onDownloadClick) onDownloadClick()
            }}
            className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF7A30] to-[#FF5200] shadow-md shadow-orange-500/30"
          >
            <Download className="w-4 h-4" />
            <span>Download on Google Play</span>
          </a>
        </div>
      )}
    </header>
  )
}
