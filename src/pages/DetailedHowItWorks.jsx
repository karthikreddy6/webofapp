import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  UserPlus,
  GraduationCap,
  UtensilsCrossed,
  ShoppingCart,
  CalendarClock,
  BellRing,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  Download,
  Users,
  ChevronRight
} from 'lucide-react'
import { PLAY_STORE_URL } from '../constants'

export default function DetailedHowItWorks({ onNavigateHome, onDownloadClick }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-800 pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Header */}
        <div className="mb-8 sm:mb-14">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#FF5200] hover:border-[#FF5200]/30 shadow-sm transition-all mb-6 sm:mb-8 text-sm font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-14 border border-slate-200/80 shadow-sm relative overflow-hidden">
            <img
              src="/images/logo.png"
              alt="Buvva College Food Ordering"
              className="w-32 sm:w-44 mb-4 sm:mb-5 drop-shadow-sm"
            />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF5200] text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step-by-Step Architecture</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              How Buvva Works: <br />
              <span className="bg-gradient-to-r from-[#FF7A30] to-[#FF5200] bg-clip-text text-transparent">
                The 6-Step Queue-Skipping Guide
              </span>
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              From signing up to picking up your meal with <strong>zero wasted time</strong>. Follow the exact journey that lets students skip the crowded campus rush.
            </p>
          </div>
        </div>

        {/* 6 Steps Workflow */}
        <div className="space-y-8 sm:space-y-16">
          
          {/* STEP 1: Register */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-slate-200/80 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7A30] to-[#FF5200] text-white flex items-center justify-center font-extrabold text-base shadow-md shadow-orange-500/25">
                    1
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF5200]">
                    Step 01: Account Setup
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                  Register: Join the Queue Skippers
                </h2>

                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Sign up in under 30 seconds to activate your student ordering profile. No complicated verifications required:
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <UserPlus className="w-5 h-5 text-[#FF5200] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Quick Student Info</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Enter your Full Name, 3-digit College ID, Campus Email, and Password.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Mobile Number for Live Alerts</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Your phone number receives live SMS & push notifications the second food is ready.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Screenshot: screen_register.png */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[230px] sm:max-w-[270px] bg-slate-900 rounded-[2.2rem] sm:rounded-[2.6rem] p-2 shadow-2xl shadow-slate-900/15 border-2 border-slate-800">
                  <img
                    src="/images/screen_register.png"
                    alt="Buvva App - Register Account"
                    className="w-full h-auto rounded-[1.9rem] sm:rounded-[2.3rem]"
                  />
                </div>
              </div>

            </div>
          </motion.div>

          {/* STEP 2: Select College */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-slate-200/80 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Screenshot: screen_select_college.png */}
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <div className="w-full max-w-[230px] sm:max-w-[270px] bg-slate-900 rounded-[2.2rem] sm:rounded-[2.6rem] p-2 shadow-2xl shadow-slate-900/15 border-2 border-slate-800">
                  <img
                    src="/images/screen_select_college.png"
                    alt="Buvva App - Select College Dropdown"
                    className="w-full h-auto rounded-[1.9rem] sm:rounded-[2.3rem]"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7A30] to-[#FF5200] text-white flex items-center justify-center font-extrabold text-base shadow-md shadow-orange-500/25">
                    2
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF5200]">
                    Step 02: Campus Hub Selection
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                  Select College & Campus Block
                </h2>

                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Buvva connects you directly to the licensed canteen operating on your specific college campus:
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200">
                    <GraduationCap className="w-5 h-5 text-[#FF5200] mb-2" />
                    <h4 className="font-bold text-slate-900 text-sm">Engineering College</h4>
                    <p className="text-xs text-slate-600 mt-1">Main Canteen Block, North Food Court, Express Tea Point</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200">
                    <GraduationCap className="w-5 h-5 text-blue-600 mb-2" />
                    <h4 className="font-bold text-slate-900 text-sm">Business & Arts College</h4>
                    <p className="text-xs text-slate-600 mt-1">Central Cafeteria, South Delights, Maggie Hub</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                    <GraduationCap className="w-5 h-5 text-emerald-600 mb-2" />
                    <h4 className="font-bold text-slate-900 text-sm">Science College</h4>
                    <p className="text-xs text-slate-600 mt-1">Science Block Canteen, Snack Kiosk, Chilled Drinks</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200">
                    <Sparkles className="w-5 h-5 text-purple-600 mb-2" />
                    <h4 className="font-bold text-slate-900 text-sm">Request a New College</h4>
                    <p className="text-xs text-slate-600 mt-1">Don't see your campus? Request onboarding in 1 tap!</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* STEP 3: Select Item from Menu */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-slate-200/80 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7A30] to-[#FF5200] text-white flex items-center justify-center font-extrabold text-base shadow-md shadow-orange-500/25">
                    3
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF5200]">
                    Step 03: Menu Exploration
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                  Select Item from Menu
                </h2>

                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Browse live menus with high-resolution food images, item descriptions, and exact kitchen prep estimates:
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <UtensilsCrossed className="w-5 h-5 text-[#FF5200] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Categorized Delicacies</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Explore <strong>All Items, Biryani, Curries, Breads</strong>, and Beverages with instant search.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Real Prep Timings & Discounts</h4>
                      <p className="text-xs text-slate-600 mt-0.5">e.g. <em>Chicken Biryani ₹160.00 (18m prep, 15.79% OFF)</em>, <em>Butter Chicken ₹180.00 (16m prep)</em>.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">One-Tap Add to Tray</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Click [ ADD ] to load items directly into your active food tray.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Screenshot: screen_menu.png */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[230px] sm:max-w-[270px] bg-slate-900 rounded-[2.2rem] sm:rounded-[2.6rem] p-2 shadow-2xl shadow-slate-900/15 border-2 border-slate-800">
                  <img
                    src="/images/screen_menu.png"
                    alt="Buvva App - Select Menu Items"
                    className="w-full h-auto rounded-[1.9rem] sm:rounded-[2.3rem]"
                  />
                </div>
              </div>

            </div>
          </motion.div>

          {/* STEP 4: Checkout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-slate-200/80 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Screenshot: screen_plate.png */}
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <div className="w-full max-w-[230px] sm:max-w-[270px] bg-slate-900 rounded-[2.2rem] sm:rounded-[2.6rem] p-2 shadow-2xl shadow-slate-900/15 border-2 border-slate-800">
                  <img
                    src="/images/screen_plate.png"
                    alt="Buvva App - Your Plate and Checkout"
                    className="w-full h-auto rounded-[1.9rem] sm:rounded-[2.3rem]"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7A30] to-[#FF5200] text-white flex items-center justify-center font-extrabold text-base shadow-md shadow-orange-500/25">
                    4
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF5200]">
                    Step 04: Transparent Checkout
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                  Checkout: Platform Fee Never!
                </h2>

                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Review your tray with student-first perks that make campus food affordable and hassle-free:
                </p>

                <div className="mt-6 space-y-3.5">
                  <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Platform Fee: NEVER</span>
                    </div>
                    <p className="text-xs text-emerald-900 mt-1">Unlike commercial apps charging platform & delivery markups, Buvva charges ₹0 extra fees on campus food.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200">
                    <div className="flex items-center gap-2 text-blue-800 font-bold text-sm">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span>Split Bill with Buddy</span>
                    </div>
                    <p className="text-xs text-blue-900 mt-1">Eating together? Toggle the split bill feature to divide payments with friends directly via UPI.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-orange-50/80 border border-orange-200">
                    <div className="flex items-center gap-2 text-[#FF5200] font-bold text-sm">
                      <ShoppingCart className="w-4 h-4 text-[#FF5200]" />
                      <span>Student Discount Codes</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">Apply college coupon codes to claim campus discounts before final confirmation.</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* STEP 5: Schedule (Shedual) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-slate-200/80 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7A30] to-[#FF5200] text-white flex items-center justify-center font-extrabold text-base shadow-md shadow-orange-500/25">
                    5
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF5200]">
                    Step 05: Slot Selection
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                  Schedule Your Meal Slot
                </h2>

                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Never worry about sold-out food. Select the exact break slot that matches your college class timetable:
                </p>

                <div className="mt-6 space-y-3.5">
                  <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200">
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <span className="text-[#FF5200]">🔍 Morning Break Slot (Breakfast)</span>
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">Best for Irani Chai & Puffs. Available slots: <strong>08:00 - 08:30 AM</strong>, <strong>08:30 - 09:00 AM</strong>, <strong>09:00 - 09:30 AM</strong>.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <span>🍛 Lunch Break Slot (Lunch)</span>
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">Best for Full Meals & Dum Biryani. Timed so cooking finishes right as the lunch bell rings.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200">
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <span>🥤 Evening Free Hour (Snacks)</span>
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">Best for Fresh Fruit Juices, Hot Samosas, and Quick Sandwiches between evening classes.</p>
                  </div>
                </div>

                <div className="mt-6 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-medium">
                  💡 <em>Prefer instant cooking? Tap <strong>[ Order Now ]</strong> instead of Schedule to fire up immediate preparation.</em>
                </div>
              </div>

              {/* Screenshot: screen_schedule.png */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[230px] sm:max-w-[270px] bg-slate-900 rounded-[2.2rem] sm:rounded-[2.6rem] p-2 shadow-2xl shadow-slate-900/15 border-2 border-slate-800">
                  <img
                    src="/images/screen_schedule.png"
                    alt="Buvva App - Schedule Your Pickup Slot"
                    className="w-full h-auto rounded-[1.9rem] sm:rounded-[2.3rem]"
                  />
                </div>
              </div>

            </div>
          </motion.div>

          {/* STEP 6: Get Order (Zero Wait Pickup) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-slate-200/80 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Screenshot: screen_order_token.png */}
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <div className="w-full max-w-[230px] sm:max-w-[270px] bg-slate-900 rounded-[2.2rem] sm:rounded-[2.6rem] p-2 shadow-2xl shadow-slate-900/15 border-2 border-slate-800">
                  <img
                    src="/images/screen_order_token.png"
                    alt="Buvva App - Ready to Collect Order Token"
                    className="w-full h-auto rounded-[1.9rem] sm:rounded-[2.3rem]"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7A30] to-[#FF5200] text-white flex items-center justify-center font-extrabold text-base shadow-md shadow-orange-500/25">
                    6
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF5200]">
                    Step 06: Zero-Wait Pickup
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                  Get Order On Time — Zero Wait Time
                </h2>

                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  The moment your dish is plated and packed, your phone receives the <strong>Ready to Collect</strong> alert:
                </p>

                <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Your Digital Token Number
                    </span>
                    <span className="px-2.5 sm:px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs">
                      READY TO COLLECT
                    </span>
                  </div>

                  <div className="text-2xl sm:text-3xl font-display font-black text-slate-900">
                    #1 (or your active token)
                  </div>

                  <div className="pt-2 border-t border-emerald-200/80 text-xs text-emerald-950 space-y-1">
                    <p><strong>Collect At:</strong> Priority Window 2 (Express Pickup Rack)</p>
                    <p className="italic font-medium">"Flash this screen code to the counter captain. No waiting, no queueing."</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onDownloadClick}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF7A30] to-[#FF5200] text-white font-bold text-sm shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download on Google Play</span>
                  </a>

                  <button
                    onClick={onNavigateHome}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition-colors cursor-pointer"
                  >
                    <span>Back to Homepage</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </div>
  )
}
