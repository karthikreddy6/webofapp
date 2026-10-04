import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  UserPlus,
  GraduationCap,
  UtensilsCrossed,
  ShoppingCart,
  CalendarClock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  BellRing
} from 'lucide-react'

const STEPS = [
  {
    id: 1,
    icon: UserPlus,
    badge: 'Step 01',
    title: 'Register Account',
    subtitle: 'Join the Queue Skippers',
    description: 'Sign up in seconds with your name, 3-digit college ID, mobile number for live SMS/push alerts, and campus email.',
    screenshot: '/images/screen_register.png',
    screenshotAlt: 'Buvva App - Register account screen',
  },
  {
    id: 2,
    icon: GraduationCap,
    badge: 'Step 02',
    title: 'Select College',
    subtitle: 'Campus Hub Routing',
    description: 'Select your college (Engineering, Business, Arts, Science, or Request a New Campus) to instantly connect to your local canteen kitchen.',
    screenshot: '/images/screen_select_college.png',
    screenshotAlt: 'Buvva App - Select College dropdown screen',
  },
  {
    id: 3,
    icon: UtensilsCrossed,
    badge: 'Step 03',
    title: 'Select Item from Menu',
    subtitle: 'Live Canteen Dishes',
    description: 'Browse categories like Biryani, Curries, Breads, and Snacks. Check live dish availability and accurate prep times (e.g. 18m Biryani).',
    screenshot: '/images/screen_menu.png',
    screenshotAlt: 'Buvva App - Menu and food categories screen',
  },
  {
    id: 4,
    icon: ShoppingCart,
    badge: 'Step 04',
    title: 'Review Plate & Checkout',
    subtitle: 'Platform Fee: Never',
    description: 'Review your plate items, apply student discount codes, or toggle "Split Bill with Buddy". Enjoy transparent pricing with zero convenience fees.',
    screenshot: '/images/screen_plate.png',
    screenshotAlt: 'Buvva App - Your plate review and checkout screen',
  },
  {
    id: 5,
    icon: CalendarClock,
    badge: 'Step 05',
    title: 'Schedule Your Pickup',
    subtitle: 'Pick Up Fresh When Class Ends',
    description: 'Order live or schedule ahead for Morning Break (08:00 AM), Lunch Break (Meals & Biryani), or Evening Free Hour (05:30 PM) so food is ready right on time.',
    screenshot: '/images/screen_schedule.png',
    screenshotAlt: 'Buvva App - Schedule pickup time slot screen',
  },
  {
    id: 6,
    icon: BellRing,
    badge: 'Step 06',
    title: 'Get Order & Skip Line',
    subtitle: 'Zero Wasted Time',
    description: 'Receive real-time ready alerts. Walk to Priority Window 2, flash your digital token number (#1), grab your piping hot food, and go!',
    screenshot: '/images/screen_order_token.png',
    screenshotAlt: 'Buvva App - Ready to collect token screen',
  },
]

export default function InteractiveAppTour({ onNavigatePage }) {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden bg-white">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-orange-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-amber-100/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF5200] text-xs font-bold uppercase tracking-wider mb-4">
            The Complete 6-Step Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            How Buvva works from start to finish.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Register, select your college, pick dishes, choose schedule or live prep, and grab your order with zero line.
          </p>
        </div>

        {/* Interactive Layout: 6 Steps on Left, Interactive Phone on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: 6 Steps List */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            {STEPS.map((step, idx) => {
              const Icon = step.icon
              const isActive = activeStep === idx
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`group p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 border text-left relative overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-50/90 via-white to-orange-50/50 border-[#FF5200] shadow-lg shadow-orange-500/10 scale-[1.01]'
                      : 'bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  {/* Active left indicator bar */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#FF7A30] to-[#FF5200] rounded-r" />
                  )}

                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-br from-[#FF7A30] to-[#FF5200] text-white shadow-md shadow-orange-500/30 scale-105'
                          : 'bg-white border border-slate-200 text-slate-500'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-[#FF5200]' : 'text-slate-400'}`}>
                          {step.badge}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          {step.subtitle}
                        </span>
                      </div>

                      <h3 className={`text-base font-bold font-display transition-colors ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                        {step.title}
                      </h3>

                      {isActive && (
                        <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed animate-in fade-in duration-200">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Link to Full Detailed Guide */}
            <div className="mt-2 p-4 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-900">Want the full detailed breakdown?</h4>
                <p className="text-[11px] text-slate-600">See all 6 steps with detailed tips and slot timings.</p>
              </div>
              <button
                onClick={() => onNavigatePage('how-it-works')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FF5200] hover:bg-[#E64000] text-white text-xs font-bold shadow-sm transition-all shrink-0 cursor-pointer"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: 3D Phone Preview with Actual Screenshot for Selected Step */}
          <div className="lg:col-span-6 flex justify-center" style={{ perspective: '1200px' }}>
            <div className="relative w-full max-w-[310px] sm:max-w-[330px]">
              
              {/* Soft glow behind phone */}
              <div className="absolute -inset-6 bg-gradient-to-br from-orange-400/20 via-amber-300/10 to-transparent rounded-full blur-2xl opacity-70 pointer-events-none" />

              {/* 3D Phone Frame */}
              <div className="relative bg-gradient-to-b from-slate-800 to-slate-950 rounded-[3rem] p-[3px] shadow-2xl shadow-slate-900/30">
                <div className="bg-black rounded-[2.8rem] p-2 relative overflow-hidden">
                  
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-30 flex items-center justify-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800 ring-1 ring-slate-700" />
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                  </div>

                  {/* Screenshot with animated transition */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="relative z-10"
                    >
                      <img
                        src={STEPS[activeStep].screenshot}
                        alt={STEPS[activeStep].screenshotAlt}
                        className="w-full h-auto rounded-[2.4rem]"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Glass reflection */}
                  <div className="absolute inset-2 rounded-[2.4rem] z-20 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Step indicator pills */}
              <div className="flex items-center justify-center gap-1.5 mt-5">
                {STEPS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                      activeStep === idx
                        ? 'w-7 h-2 bg-[#FF5200]'
                        : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
