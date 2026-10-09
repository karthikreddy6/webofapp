import React from 'react'
import { motion } from 'framer-motion'
import { XCircle, CheckCircle2, Frown, Smile, Sparkles } from 'lucide-react'

export default function QueueVsBuvva() {
  return (
    <section id="comparison" className="py-24 relative overflow-hidden bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF5200] text-xs font-bold uppercase tracking-wider mb-4">
            The Campus Reality Check
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Stop sacrificing your break time.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Compare 20 agonizing minutes in a packed lunch rush against the effortless 30-second pickup with Buvva.
          </p>
        </motion.div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Pain Point Card: Old Way */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 bg-red-50/40 border border-red-200/80 shadow-sm flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                    <Frown className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900">The Old Canteen Rush</h3>
                    <span className="text-xs text-red-600 font-semibold">Chaos, Heat & Lost Time</span>
                  </div>
                </div>
                <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold">
                  ~20+ Mins Lost
                </span>
              </div>

              <ul className="space-y-3.5 sm:space-y-4 text-slate-700 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Standing in packed, suffocating queues under the noon heat.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Shouting your order over the loud counter noise and hoping staff hears you.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Finding out your favorite dish is sold out <i>after</i> queuing for 15 minutes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Cash change arguments or jammed payment screens right at the counter.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Cold or soggy food by the time you finally fight your way to a table.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-red-200/80 flex items-center justify-between text-xs text-slate-500">
              <span>Average wait time: 18 - 25 minutes</span>
              <span className="font-bold text-red-600">High Stress</span>
            </div>
          </motion.div>

          {/* Solution Card: The Buvva Way */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 bg-gradient-to-b from-orange-50/70 via-white to-orange-50/40 border border-[#FF5200]/30 shadow-xl shadow-orange-500/10 flex flex-col justify-between relative overflow-hidden ring-1 ring-[#FF5200]/20"
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FF7A30] to-[#FF5200] flex items-center justify-center text-white shadow-md shadow-orange-500/30 shrink-0">
                    <Smile className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900">The Buvva Experience</h3>
                    <span className="text-xs text-[#FF5200] font-semibold">Scheduled & Live Ordering</span>
                  </div>
                </div>
                <span className="self-start sm:self-auto px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
                  0 Min Line
                </span>
              </div>

              <ul className="space-y-4 text-slate-700 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pre-order from lecture hall or hostel: Scheduled or Live mode.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Live stock indicator — you always see what’s freshly cooking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Real-time push alerts when your digital token is ready at the window.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Instant UPI & digital wallet integration for frictionless payment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Piping hot, freshly packed food handed straight to you with zero line.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-orange-200/80 flex items-center justify-between text-xs text-slate-600">
              <span>Counter pickup: &lt; 30 seconds</span>
              <span className="font-bold text-emerald-700 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Zero Lost Time
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
