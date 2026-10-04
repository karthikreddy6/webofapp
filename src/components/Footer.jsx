import React from 'react'
import { Heart, ArrowUp, Shield, FileText, BookOpen } from 'lucide-react'

export default function Footer({ onDownloadClick, onNavigatePage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigatePage('home')}
                className="cursor-pointer text-left"
              >
                <img
                  src="/images/logo.png"
                  alt="Buvva - College Food Ordering"
                  className="h-12 w-auto object-contain drop-shadow-md"
                />
              </button>
            </div>

            <p className="mt-4 text-sm text-slate-400 max-w-sm leading-relaxed">
              Buvva is the campus smart food ordering platform designed to eliminate canteen queues. Pre-order via <strong>Scheduled</strong> or <strong>Live Orders</strong>, track prep, and collect in seconds.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={onDownloadClick}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-bold text-white transition-colors cursor-pointer"
              >
                <span>Google Play Store</span>
              </button>
              <a
                href="mailto:support@buvva.co.in"
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                support@buvva.co.in
              </a>
            </div>
          </div>

          {/* Links Column 1: For Students */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Students
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigatePage('how-it-works')}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>How App Works</span>
                </button>
              </li>
              <li>
                <a href="#comparison" className="hover:text-orange-400 transition-colors">
                  Queue vs Buvva
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-orange-400 transition-colors">
                  Features & Tracking
                </a>
              </li>
              <li>
                <button
                  onClick={onDownloadClick}
                  className="hover:text-orange-400 transition-colors cursor-pointer"
                >
                  Download Android App
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Legal & Privacy */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Legal & Privacy
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigatePage('privacy')}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('terms')}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-400" />
                  <span>Terms & Conditions</span>
                </button>
              </li>
              <li>
                <a href="mailto:support@buvva.co.in" className="hover:text-orange-400 transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} buvva.co.in. All rights reserved. Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>for college campus foodies.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  )
}
