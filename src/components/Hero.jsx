import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, ArrowRight, Clock, Zap, ChevronDown, BookOpen } from 'lucide-react'
import { PLAY_STORE_URL } from '../constants'

// Floating 3D Phone component that displays a real app screenshot
function Floating3DPhone({ src, alt, className, style, delay = 0, rotateX = 12, rotateY = -8 }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${className || ''}`}
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
        ...style,
      }}
    >
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotateX: rotateX + mousePos.y * -4,
          rotateY: rotateY + mousePos.x * 6,
        }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay },
          rotateX: { type: 'spring', stiffness: 75, damping: 30 },
          rotateY: { type: 'spring', stiffness: 75, damping: 30 },
        }}
        className="relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Soft shadow for light background */}
        <div className="absolute -inset-3 bg-gradient-to-br from-orange-400/20 via-slate-400/10 to-transparent rounded-[2.8rem] blur-2xl opacity-70" />
        
        {/* Phone outer frame */}
        <div className="relative bg-gradient-to-b from-slate-800 to-slate-950 rounded-[2.8rem] p-[3px] shadow-2xl shadow-slate-900/40">
          {/* Inner bezel */}
          <div className="bg-black rounded-[2.6rem] p-1.5 relative overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-20 flex items-center justify-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-slate-800" />
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
            </div>
            
            {/* Actual app screenshot */}
            <img
              src={src}
              alt={alt}
              className="w-full h-auto rounded-[2.2rem] relative z-10"
              loading="lazy"
            />
            
            {/* Screen reflection */}
            <div className="absolute inset-0 rounded-[2.2rem] z-10 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
        
        {/* 3D depth side */}
        <div
          className="absolute inset-0 rounded-[2.8rem] bg-slate-900"
          style={{
            transform: 'translateZ(-8px)',
            filter: 'blur(1px)',
          }}
        />
      </motion.div>
    </motion.div>
  )
}

// Floating food image with 3D tilt
function FloatingFoodImage({ src, alt, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className={`absolute ${className || ''}`}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
      >
        <div className="relative">
          <div className="absolute -inset-2 bg-orange-400/25 rounded-2xl blur-lg" />
          <img
            src={src}
            alt={alt}
            className="relative w-full h-full object-cover rounded-2xl shadow-xl shadow-slate-900/20 border-2 border-white"
            loading="lazy"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero({ onDownloadClick, onNavigatePage }) {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 800], [0, -60])
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0.4])

  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-34 lg:pb-20 overflow-hidden flex items-center bg-gradient-to-b from-[#FFFDF9] via-[#FAF8F5] to-[#F5F2EB]">
      {/* Soft warm light ambient blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-300/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] bg-amber-200/25 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[500px] bg-rose-200/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Grid Pattern in subtle warm slate */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <motion.div 
        style={{ y: heroY, opacity: heroOpacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          
          {/* Left Column: Headline & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-start text-left"
          >
            {/* Live Campus Pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-200 shadow-sm text-[#FF5200] text-xs sm:text-sm font-bold mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5200] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5200]" />
              </span>
              <span>🚀 Fresh Campus Launch</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-semibold">Early Access v1.0</span>
            </motion.div>

            {/* Logo Image */}
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              src="/images/logo.png"
              alt="Buvva - College Food Ordering"
              className="w-52 sm:w-64 mb-6 drop-shadow-md"
            />

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display font-black tracking-tight leading-[1.06] text-slate-900">
              <span className="block">
                Skip The Line.
              </span>
              <span className="block mt-1">
                Grab Your{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#FF7A30] via-[#FF5200] to-[#E64000] bg-clip-text text-transparent">
                    Buvva
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF5200] to-[#FF9F1C] rounded-full" />
                </span>
                .
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-md font-normal leading-relaxed">
              Order food from your campus canteen before the bell rings. Make a <strong>Scheduled Pre-Order</strong> or <strong>Live Instant Order</strong>. Walk in, flash your digital token, and enjoy hot food immediately!
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              {/* Google Play Store Button */}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onDownloadClick}
                className="group relative flex items-center justify-center sm:justify-start gap-4 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF5200] to-[#E64000] text-white font-bold text-base shadow-xl shadow-orange-600/30 hover:shadow-orange-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-orange-400/30 cursor-pointer"
              >
                <svg className="w-8 h-8 fill-current text-white shrink-0" viewBox="0 0 512 512">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-widest text-orange-100 font-medium leading-none">
                    GET IT ON
                  </span>
                  <span className="text-xl font-display font-extrabold tracking-tight leading-tight">
                    Google Play
                  </span>
                </div>
              </a>

              {/* Detailed How It Works Button */}
              <button
                onClick={() => onNavigatePage('how-it-works')}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-orange-50 text-slate-800 hover:text-[#FF5200] text-sm font-bold border border-slate-200/90 shadow-sm transition-all duration-200 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#FF5200]" />
                <span>Detailed App Guide</span>
                <ArrowRight className="w-4 h-4 text-[#FF5200] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-7 border-t border-slate-200/80 w-full grid grid-cols-3 gap-2 sm:gap-4">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <Clock className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#FF5200]" />
                  <span className="text-lg sm:text-2xl font-black font-display text-slate-900">0 min</span>
                </div>
                <span className="text-[11px] sm:text-xs text-slate-500 mt-0.5 font-medium">Queue Wait</span>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <Zap className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-600" />
                  <span className="text-lg sm:text-2xl font-black font-display text-slate-900">Live</span>
                </div>
                <span className="text-[11px] sm:text-xs text-slate-500 mt-0.5 font-medium">Kitchen Alerts</span>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#FF5200]" />
                  <span className="text-lg sm:text-2xl font-black font-display text-slate-900">₹0</span>
                </div>
                <span className="text-[11px] sm:text-xs text-slate-500 mt-0.5 font-medium">Platform Fee</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Floating Phone Screenshots */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[440px] sm:min-h-[620px] w-full" style={{ perspective: '1500px' }}>
            
            {/* Center phone: Campus Menu (Prominently centered on all devices) */}
            <Floating3DPhone
              src="/images/screen_menu.png"
              alt="Buvva App - Browse Campus Menu"
              className="w-[240px] sm:w-[270px] z-30 relative mx-auto"
              delay={0.2}
              rotateX={8}
              rotateY={-5}
            />

            {/* Right phone: Live Order Token (Shown on tablet & desktop) */}
            <Floating3DPhone
              src="/images/screen_order_token.png"
              alt="Buvva App - Live Order Token & Ready to Collect"
              className="hidden sm:block w-[190px] sm:w-[220px] z-20 absolute right-0 sm:right-4 lg:right-2 top-8 sm:top-6"
              delay={0.4}
              rotateX={6}
              rotateY={-12}
            />

            {/* Left phone: Schedule Meal Slot (Shown on tablet & desktop) */}
            <Floating3DPhone
              src="/images/screen_schedule.png"
              alt="Buvva App - Schedule Your Meal Pickup Slot"
              className="hidden sm:block w-[170px] sm:w-[200px] z-10 absolute left-0 sm:left-2 lg:left-0 bottom-6 sm:bottom-2"
              delay={0.6}
              rotateX={10}
              rotateY={6}
            />

            {/* Floating Food Card */}
            <FloatingFoodImage
              src="/images/card_of_food.png"
              alt="Chicken Biryani Card"
              className="w-[140px] sm:w-[190px] z-40 -bottom-3 right-2 sm:right-[18%]"
              delay={0.8}
            />

            {/* Floating badges with light glass styling */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-2 left-2 sm:top-4 sm:left-[15%] z-40 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl bg-white/95 border border-emerald-200 backdrop-blur-md shadow-md shadow-slate-900/5"
            >
              <span className="text-[11px] sm:text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Kitchen Open
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-10 left-2 sm:bottom-14 sm:left-[4%] z-40 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl bg-white/95 border border-orange-200 backdrop-blur-md shadow-md shadow-slate-900/5"
            >
              <span className="text-[11px] sm:text-xs font-bold text-[#FF5200] flex items-center gap-1.5">
                ⚡ Ready in 0 min
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="hidden sm:block absolute top-[32%] right-[4%] z-40 px-3.5 py-2 rounded-2xl bg-white/95 border border-amber-200 backdrop-blur-md shadow-lg shadow-slate-900/5"
            >
              <span className="text-xs font-bold text-amber-700">₹160.00 Fresh Dish 🍛</span>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center justify-center mt-6 text-slate-400">
          <span className="text-[11px] font-semibold tracking-wider uppercase mb-1">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-slate-400" />
        </div>
      </motion.div>
    </section>
  )
}
