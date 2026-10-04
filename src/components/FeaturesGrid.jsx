import React from 'react'
import { motion } from 'framer-motion'
import { Radio, Zap, BadgePercent, WifiOff, CalendarClock, Users2, Sparkles } from 'lucide-react'

const FEATURES = [
  {
    icon: CalendarClock,
    badge: 'Campus Timing',
    title: 'Scheduled vs Live Orders',
    description: 'Pre-order 20 minutes before class ends for sharp 1:00 PM pickup, or fire up an instant live order when you are hungry right now.',
    color: 'from-orange-50 to-amber-50/50',
    border: 'border-orange-200/80'
  },
  {
    icon: Radio,
    badge: 'Real-Time SSE',
    title: 'Live Kitchen Ticket Sync',
    description: 'Instant status streaming direct from the canteen kitchen display. Know the exact moment your dosa is flipped and packaged.',
    color: 'from-blue-50 to-indigo-50/50',
    border: 'border-blue-200/80'
  },
  {
    icon: BadgePercent,
    badge: '100% Student Pricing',
    title: 'Zero Commission or Markups',
    description: 'Pay true campus prices. No inflated item rates, no hidden packaging markups, and zero convenience taxes.',
    color: 'from-emerald-50 to-teal-50/50',
    border: 'border-emerald-200/80'
  },
  {
    icon: Zap,
    badge: 'Frictionless',
    title: '1-Tap UPI & Quick Pay',
    description: 'Seamless integration with GPay, PhonePe, Paytm, and college campus cards for instantaneous order confirmation.',
    color: 'from-purple-50 to-fuchsia-50/50',
    border: 'border-purple-200/80'
  },
  {
    icon: WifiOff,
    badge: 'Offline-First Cache',
    title: 'Works on Spotty Campus Wi-Fi',
    description: 'Low-latency mobile architecture caches menus locally so you can browse smoothly even inside dense basements and labs.',
    color: 'from-pink-50 to-rose-50/50',
    border: 'border-pink-200/80'
  },
  {
    icon: Users2,
    badge: 'Hostel & Squad',
    title: 'Group Meal Pickups',
    description: 'Order for your study circle or hostel roommates under one single token number to grab everything in a single trip.',
    color: 'from-amber-50 to-yellow-50/50',
    border: 'border-amber-200/80'
  }
]

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF5200] text-xs font-bold uppercase tracking-wider mb-4">
            Engineered for Campus Life
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Features built around how students actually eat.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Every feature in Buvva was designed to eliminate the daily lunchtime bottlenecks in colleges, universities, and tech parks.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className={`group p-8 rounded-3xl bg-gradient-to-b ${item.color} bg-white border ${item.border} hover:border-[#FF5200] transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-800 group-hover:scale-110 group-hover:bg-[#FF5200] group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-[#FF5200] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-[#FF5200]">
                  <span>Optimized for students</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
