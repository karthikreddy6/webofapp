import React from 'react'
import { motion } from 'framer-motion'
import { Download, Sparkles, Smartphone, ShieldCheck } from 'lucide-react'
import confetti from 'canvas-confetti'
import { PLAY_STORE_URL } from '../constants'

export default function GooglePlayDownload() {
  const triggerDownloadAction = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FF5200', '#FF7A30', '#10B981', '#F59E0B', '#3B82F6', '#A855F7'],
      })
    } catch (e) { /* ignore */ }
  }

  return (
    <section id="download" className="py-24 lg:py-32 relative overflow-hidden bg-white border-t border-slate-200/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-orange-200/35 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 lg:p-16 rounded-[40px] bg-gradient-to-br from-white via-orange-50/30 to-amber-50/30 border border-orange-200/90 shadow-2xl shadow-orange-500/10 relative overflow-hidden">
          
          {/* Decorative corner accents */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: CTA */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <img
                src="/images/logo.png"
                alt="Buvva College Food Ordering"
                className="w-36 sm:w-44 mb-5 drop-shadow-sm"
              />

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span>Available on Android</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
                Ready to skip the line? Get{' '}
                <span className="bg-gradient-to-r from-[#FF7A30] to-[#FF5200] bg-clip-text text-transparent">Buvva</span>{' '}
                now.
              </h2>

              <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Download the official Buvva Android app from Google Play. Pre-order campus meals with <strong>Scheduled Orders</strong> or <strong>Live Orders</strong>, and collect with zero wait.
              </p>

              {/* Google Play Button */}
              <div className="mt-8">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={triggerDownloadAction}
                  className="group relative inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF5200] to-[#E64000] text-white font-bold text-base sm:text-lg shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 border border-orange-400/30 overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <svg className="w-9 h-9 fill-current text-white shrink-0 relative z-10" viewBox="0 0 512 512">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                  <div className="flex flex-col text-left relative z-10">
                    <span className="text-[10px] uppercase tracking-widest text-orange-100 font-medium leading-none">
                      GET IT ON
                    </span>
                    <span className="text-2xl font-display font-extrabold tracking-tight leading-tight">
                      Google Play
                    </span>
                  </div>
                </a>
              </div>

              {/* Verified specs */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-slate-700">Play Protect Verified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#FF5200]" />
                  <span className="font-bold text-slate-800">Early Access v1.0</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-[#FF5200]" />
                  <span className="text-slate-700">Android 8.0+ • ~18 MB</span>
                </div>
              </div>
            </div>

            {/* Right: 3D Phone with real screenshot */}
            <div className="lg:col-span-5 flex justify-center" style={{ perspective: '1200px' }}>
              <motion.div
                animate={{ rotateY: [-3, 3, -3], rotateX: [3, 5, 3] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Phone glow */}
                <div className="absolute -inset-6 bg-orange-400/20 rounded-full blur-2xl pointer-events-none" />

                {/* Phone frame */}
                <div className="relative w-[240px] sm:w-[280px] bg-gradient-to-b from-slate-800 to-slate-950 rounded-[3rem] p-[3px] shadow-2xl shadow-slate-900/30">
                  <div className="bg-black rounded-[2.8rem] p-2 relative overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-20" />

                    <img
                      src="/images/screen_menu.png"
                      alt="Buvva App - Campus Menu"
                      className="w-full h-auto rounded-[2.4rem]"
                    />

                    {/* Screen reflection */}
                    <div className="absolute inset-2 rounded-[2.4rem] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-10" />
                  </div>
                </div>

                {/* 3D depth layer */}
                <div
                  className="absolute inset-0 rounded-[3rem] bg-slate-900"
                  style={{ transform: 'translateZ(-10px) translateY(5px)', filter: 'blur(6px)' }}
                />
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
