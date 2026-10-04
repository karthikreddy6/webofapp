import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChefHat, TrendingUp, Cpu, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react'

export default function CanteenPartnerSection() {
  const [submitted, setSubmitted] = useState(false)
  const [canteenName, setCanteenName] = useState('')
  const [campusName, setCampusName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canteenName || !phone) return
    setSubmitted(true)
  }

  return (
    <section id="canteens" className="py-24 relative overflow-hidden bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF5200] text-xs font-bold uppercase tracking-wider mb-4">
              For Canteens & Food Courts
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
              Triple your kitchen throughput. Zero counter chaos.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              When 500 students pour into the cafeteria at once, human cashiers simply can't process orders fast enough. Buvva equips your kitchen with a smart offline-first vendor POS display that batches incoming scheduled & live orders, keeping your kitchen cooking smoothly.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-orange-50/50 border border-orange-100 flex items-start gap-3.5">
                <TrendingUp className="w-6 h-6 text-[#FF5200] shrink-0 mt-1" />
                <div>
                  <h4 className="text-slate-900 font-bold text-base">3x Faster Order Turnaround</h4>
                  <p className="text-xs text-slate-600 mt-1">Accept 30+ orders simultaneously without human counter congestion.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-3.5">
                <Cpu className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="text-slate-900 font-bold text-base">Offline-First Kitchen Terminal</h4>
                  <p className="text-xs text-slate-600 mt-1">Kitchen display keeps operating seamlessly even if local internet drops.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-100 flex items-start gap-3.5">
                <ChefHat className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h4 className="text-slate-900 font-bold text-base">Instant 1-Tap Stock Controls</h4>
                  <p className="text-xs text-slate-600 mt-1">Mark items out-of-stock instantly so angry students never order finished food.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-100 flex items-start gap-3.5">
                <ShieldCheck className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                <div>
                  <h4 className="text-slate-900 font-bold text-base">Direct Daily Settlements</h4>
                  <p className="text-xs text-slate-600 mt-1">Direct UPI settlements with comprehensive itemized daily sales reports.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Inquiry Form Card */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF9F6] border border-orange-200/80 shadow-xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-2xl font-bold font-display text-slate-900">
                Partner Your Canteen
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
                Bring Buvva smart ordering to your campus cafeteria or food stall with zero upfront hardware cost.
              </p>

              {submitted ? (
                <div className="mt-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in duration-300">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-slate-900">Request Received!</h4>
                  <p className="text-xs text-slate-600 mt-2">
                    Our campus onboarding team will contact you within 24 hours to set up your menu and kitchen terminal.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Canteen / Stall Name
                    </label>
                    <input
                      type="text"
                      required
                      value={canteenName}
                      onChange={(e) => setCanteenName(e.target.value)}
                      placeholder="e.g. Campus Cafeteria / South Canteen"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#FF5200] transition-colors shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      College / Campus Name & City
                    </label>
                    <input
                      type="text"
                      required
                      value={campusName}
                      onChange={(e) => setCampusName(e.target.value)}
                      placeholder="e.g. University Tech Campus, Hyderabad"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#FF5200] transition-colors shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#FF5200] transition-colors shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF7A30] to-[#FF5200] hover:from-[#FF5200] hover:to-[#E64000] shadow-md shadow-orange-500/25 transition-all duration-200 mt-2 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Campus Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              <div className="mt-6 pt-4 border-t border-slate-200 text-center">
                <span className="text-xs text-slate-500">
                  Prefer direct email? Contact us at{' '}
                  <a href="mailto:support@buvva.co.in" className="text-[#FF5200] font-semibold hover:underline">
                    support@buvva.co.in
                  </a>
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
