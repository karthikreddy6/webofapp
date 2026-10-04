import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const SCREENS = [
  {
    src: '/images/screen_register.png',
    alt: 'Join the Queue Skippers - Register',
    label: '1. Register Account',
  },
  {
    src: '/images/screen_select_college.png',
    alt: 'Select College Dropdown',
    label: '2. Select College',
  },
  {
    src: '/images/screen_menu.png',
    alt: 'Central Canteen Menu & Categories',
    label: '3. Campus Menu',
  },
  {
    src: '/images/screen_plate.png',
    alt: 'Your Plate & Order Summary',
    label: '4. Plate & Checkout',
  },
  {
    src: '/images/screen_schedule.png',
    alt: 'Schedule Your Pickup Slot',
    label: '5. Schedule Pickup',
  },
  {
    src: '/images/screen_order_token.png',
    alt: 'Ready to Collect Token #1',
    label: '6. Get Order & Token',
  },
  {
    src: '/images/screen_past_trays.png',
    alt: 'Track Past Meals & Orders',
    label: 'Past Trays',
  },
  {
    src: '/images/screen_profile.png',
    alt: 'Student Profile & Reward Points',
    label: 'Student Profile',
  },
]

function ScreenCard({ screen, index }) {
  const rotations = [-4, -2, 0, 2, 4, 6]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateZ: rotations[index] || 0 }}
      whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        scale: 1.05,
        rotateY: -4,
        z: 40,
        transition: { duration: 0.25 },
      }}
      className="flex-shrink-0 w-[220px] sm:w-[260px] relative group cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      {/* Soft shadow for light canvas */}
      <div className="absolute -inset-3 bg-slate-900/10 rounded-[2.8rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Phone frame */}
      <div className="relative bg-gradient-to-b from-slate-800 to-slate-950 rounded-[2.5rem] p-[2.5px] shadow-xl shadow-slate-900/25 ring-1 ring-slate-900/10 group-hover:ring-[#FF5200]/50 transition-all duration-300">
        <div className="bg-black rounded-[2.3rem] p-1.5 overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-xl z-20" />

          <img
            src={screen.src}
            alt={screen.alt}
            className="w-full h-auto rounded-[2rem]"
            loading="lazy"
          />

          {/* Glass reflection */}
          <div className="absolute inset-1.5 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-10" />

          {/* Hover label overlay */}
          <div className="absolute inset-1.5 rounded-[2rem] bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-6">
            <span className="px-4 py-1.5 rounded-full bg-[#FF5200] text-white text-xs font-bold shadow-lg">
              {screen.label}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function AppScreensShowcase() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['4%', '-14%'])

  return (
    <section ref={containerRef} className="py-24 lg:py-32 relative overflow-hidden bg-[#FAF9F6] border-y border-slate-200/60">
      {/* Soft ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-orange-200/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF5200] text-xs font-bold uppercase tracking-wider mb-4">
            Live App Gallery
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Every screen, crafted for campus speed.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Swipe through real Buvva app screens — from menu browsing to scheduled trays and instant token pickups.
          </p>
        </div>
      </div>

      {/* Horizontal scrolling showcase */}
      <motion.div
        style={{ x }}
        className="flex items-center gap-6 sm:gap-8 px-8 sm:px-16 py-6"
      >
        {SCREENS.map((screen, idx) => (
          <ScreenCard key={idx} screen={screen} index={idx} />
        ))}
      </motion.div>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAF9F6] to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAF9F6] to-transparent pointer-events-none z-10" />
    </section>
  )
}
