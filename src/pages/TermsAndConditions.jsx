import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileText, ArrowLeft, CheckCircle2, AlertCircle, Clock, Utensils, Mail } from 'lucide-react'

export default function TermsAndConditions({ onNavigateHome }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-800 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#FF5200] hover:border-[#FF5200]/30 shadow-sm transition-all mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-10">
          <img
            src="/images/logo.png"
            alt="Buvva College Food Ordering"
            className="w-32 sm:w-36 mb-5 drop-shadow-sm"
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF5200] text-xs font-bold uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Campus Service Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Effective Date: October 2026 • Last Updated: October 4, 2026
          </p>
          <p className="mt-2 text-slate-600 text-sm">
            Please read these Terms and Conditions carefully before using the <strong>Buvva</strong> mobile application and website at <span className="text-[#FF5200]">buvva.co.in</span>.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
          
          {/* Section 1 */}
          <section>
            <div className="flex items-center gap-3 text-slate-900 font-bold text-xl font-display mb-3">
              <span className="w-8 h-8 rounded-lg bg-orange-100 text-[#FF5200] flex items-center justify-center text-sm font-bold">1</span>
              <h2>Acceptance of Terms</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              By downloading, accessing, or placing an order through the Buvva mobile app or website, you agree to be legally bound by these Terms and Conditions and our Privacy Policy. If you do not agree to any part of these terms, please refrain from using our platform.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-3 text-slate-900 font-bold text-xl font-display mb-3">
              <span className="w-8 h-8 rounded-lg bg-orange-100 text-[#FF5200] flex items-center justify-center text-sm font-bold">2</span>
              <h2>Student & User Accounts</h2>
            </div>
            <p className="text-slate-600 mb-3">
              To place orders and track live preparation status, users must create an account with accurate details:
            </p>
            <ul className="space-y-2 ml-4 text-slate-600 list-disc list-outside">
              <li>You must provide your real name, valid contact phone number, and campus affiliation.</li>
              <li>You are responsible for keeping your login credentials confidential. Any orders initiated through your account will be considered authorized by you.</li>
              <li>Only one active account per individual is permitted.</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-3 text-slate-900 font-bold text-xl font-display mb-3">
              <span className="w-8 h-8 rounded-lg bg-orange-100 text-[#FF5200] flex items-center justify-center text-sm font-bold">3</span>
              <h2>Live Orders vs. Scheduled Orders</h2>
            </div>
            <p className="text-slate-600 mb-4">
              Buvva provides two primary order fulfillment options tailored for campus schedules:
            </p>
            
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-orange-50/60 border border-orange-200">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base mb-1">
                  <span className="text-[#FF5200]">⚡ Live Instant Orders</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  When you submit a Live Order, your ticket is transmitted immediately to the active kitchen POS display. Preparation begins in order of queue entry, and estimated prep times are displayed dynamically in real time.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base mb-1">
                  <span className="text-blue-600">⏰ Scheduled Pre-Orders</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Scheduled Orders allow you to lock in meal orders in advance for specific college break periods (e.g. 1:00 PM lunch bell). The kitchen automatically queues and preps the dish to ensure it is hot and packaged precisely at your chosen scheduled pickup slot.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <section>
            <div className="flex items-center gap-3 text-slate-900 font-bold text-xl font-display mb-3">
              <span className="w-8 h-8 rounded-lg bg-orange-100 text-[#FF5200] flex items-center justify-center text-sm font-bold">4</span>
              <h2>Pickup & Zero-Wait Protocol</h2>
            </div>
            <p className="text-slate-600 mb-3">
              To maintain our zero-wait campus pickup guarantee:
            </p>
            <ul className="space-y-2 ml-4 text-slate-600 list-disc list-outside">
              <li>When your order changes to <strong>"READY"</strong>, you must collect it from the Priority Express Pickup Window / Rack by showing your Digital Token Number or QR Code.</li>
              <li>Because hot meals are perishable and prepared fresh, orders not collected within 30 minutes of the ready notification may be cleared for hygiene reasons without entitlement to a refund.</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 5 */}
          <section>
            <div className="flex items-center gap-3 text-slate-900 font-bold text-xl font-display mb-3">
              <span className="w-8 h-8 rounded-lg bg-orange-100 text-[#FF5200] flex items-center justify-center text-sm font-bold">5</span>
              <h2>Pricing, Cancellations & Refunds</h2>
            </div>
            <div className="space-y-3 text-slate-600">
              <p>
                <strong>True Campus Pricing:</strong> All listed item prices reflect genuine campus cafeteria menu rates with zero hidden platform markups.
              </p>
              <p>
                <strong>Cancellation Window:</strong> You may cancel an order before the kitchen accepts and begins cooking the ticket. Once cooking has commenced, orders cannot be cancelled due to food wastage regulations.
              </p>
              <p>
                <strong>Automatic Refunds:</strong> In the rare event that an ingredient or dish becomes unavailable after payment, the order will be cancelled with a 100% immediate digital refund back to your source account.
              </p>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 6 */}
          <section>
            <div className="flex items-center gap-3 text-slate-900 font-bold text-xl font-display mb-3">
              <span className="w-8 h-8 rounded-lg bg-orange-100 text-[#FF5200] flex items-center justify-center text-sm font-bold">6</span>
              <h2>Vendor Quality & Food Hygiene</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Food preparation and hygiene standards are maintained by the licensed canteen vendors operating within your campus. Buvva acts as the digital ordering and queue management system. Any food quality grievances can be reported directly in-app via <em>Support &gt; Order Issues</em> or to the campus canteen manager.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 7 */}
          <section>
            <div className="flex items-center gap-3 text-slate-900 font-bold text-xl font-display mb-3">
              <span className="w-8 h-8 rounded-lg bg-orange-100 text-[#FF5200] flex items-center justify-center text-sm font-bold">7</span>
              <h2>Contact Us</h2>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-slate-900">Buvva Campus Legal & Operations</p>
                <p className="text-xs text-slate-500 mt-0.5">buvva.co.in • Questions regarding these terms?</p>
              </div>
              <a
                href="mailto:support@buvva.co.in"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF5200] text-white font-semibold text-xs shadow-md hover:bg-[#E64000] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>support@buvva.co.in</span>
              </a>
            </div>
          </section>

        </div>

      </div>
    </div>
  )
}
