import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, ArrowLeft, Lock, Eye, FileText, CheckCircle2, Mail } from 'lucide-react'

export default function PrivacyPolicy({ onNavigateHome }) {
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
            <Shield className="w-3.5 h-3.5" />
            <span>Legal & Data Transparency</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Effective Date: October 2026 • Last Updated: October 4, 2026
          </p>
          <p className="mt-2 text-slate-600 text-sm">
            At <strong>Buvva</strong> (operated via <span className="text-[#FF5200]">buvva.co.in</span>), we value your trust and are committed to protecting the privacy of students, campus faculty, and canteen operators.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
          
          {/* Section 1 */}
          <section>
            <div className="flex items-center gap-3 text-slate-900 font-bold text-xl font-display mb-3">
              <span className="w-8 h-8 rounded-lg bg-orange-100 text-[#FF5200] flex items-center justify-center text-sm font-bold">1</span>
              <h2>Information We Collect</h2>
            </div>
            <p className="text-slate-600 mb-3">
              We only collect information essential for providing seamless campus food ordering, live status notifications, and order verification:
            </p>
            <ul className="space-y-2.5 ml-4 text-slate-600 list-disc list-outside">
              <li><strong>Account Credentials:</strong> Full name, student email address, and phone number (used for login and order OTP verification).</li>
              <li><strong>Campus Profile:</strong> Your affiliated university, engineering college, or campus block (to ensure accurate menu and canteen routing).</li>
              <li><strong>Order Data:</strong> Details of items ordered, scheduled pickup times, token numbers, order timestamps, and transaction receipts.</li>
              <li><strong>Device & Diagnostic Data:</strong> Device model, OS version, app performance logs, and push notification tokens to send live kitchen updates.</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-3 text-slate-900 font-bold text-xl font-display mb-3">
              <span className="w-8 h-8 rounded-lg bg-orange-100 text-[#FF5200] flex items-center justify-center text-sm font-bold">2</span>
              <h2>How We Use Your Information</h2>
            </div>
            <p className="text-slate-600 mb-3">
              Your data is solely used to deliver and enhance your dining experience:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4">
              <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100">
                <CheckCircle2 className="w-5 h-5 text-[#FF5200] mb-1.5" />
                <h4 className="font-bold text-slate-900 text-sm">Order Processing</h4>
                <p className="text-xs text-slate-600 mt-1">Routing your selected dishes to the respective canteen kitchen terminal.</p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-1.5" />
                <h4 className="font-bold text-slate-900 text-sm">Real-Time Kitchen Alerts</h4>
                <p className="text-xs text-slate-600 mt-1">Streaming live prep notifications and ready-for-pickup token QR codes.</p>
              </div>
              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mb-1.5" />
                <h4 className="font-bold text-slate-900 text-sm">Campus Scheduling</h4>
                <p className="text-xs text-slate-600 mt-1">Scheduling batch orders synchronized with college timetable breaks.</p>
              </div>
              <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mb-1.5" />
                <h4 className="font-bold text-slate-900 text-sm">Fraud Prevention & Security</h4>
                <p className="text-xs text-slate-600 mt-1">Ensuring payment reconciliation and preventing fraudulent token redemptions.</p>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-3 text-slate-900 font-bold text-xl font-display mb-3">
              <span className="w-8 h-8 rounded-lg bg-orange-100 text-[#FF5200] flex items-center justify-center text-sm font-bold">3</span>
              <h2>Payment Security</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Buvva does <strong>not</strong> store your credit card numbers, debit card PINs, or UPI security MPINs. All digital transactions are processed directly through certified RBI-authorized payment aggregators (UPI, PhonePe, Google Pay, Paytm). We only receive the payment confirmation status and transaction reference ID.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <section>
            <div className="flex items-center gap-3 text-slate-900 font-bold text-xl font-display mb-3">
              <span className="w-8 h-8 rounded-lg bg-orange-100 text-[#FF5200] flex items-center justify-center text-sm font-bold">4</span>
              <h2>No Third-Party Data Selling</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We respect student privacy. <strong>We do not sell, rent, or trade your personal data to advertisers or commercial brokers.</strong> Information is only shared with the specific campus canteen fulfilling your food order (e.g. token number, item names, and first name for pickup verification).
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 5 */}
          <section>
            <div className="flex items-center gap-3 text-slate-900 font-bold text-xl font-display mb-3">
              <span className="w-8 h-8 rounded-lg bg-orange-100 text-[#FF5200] flex items-center justify-center text-sm font-bold">5</span>
              <h2>Your Rights & Account Deletion</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              You have the right to access, review, update, or permanently delete your Buvva account profile and historical order records at any time directly through the in-app <em>Profile &gt; Delete Account</em> button or by emailing our data privacy desk at <a href="mailto:support@buvva.co.in" className="text-[#FF5200] font-semibold hover:underline">support@buvva.co.in</a>.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 6 */}
          <section>
            <div className="flex items-center gap-3 text-slate-900 font-bold text-xl font-display mb-3">
              <span className="w-8 h-8 rounded-lg bg-orange-100 text-[#FF5200] flex items-center justify-center text-sm font-bold">6</span>
              <h2>Contact Privacy Officer</h2>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-slate-900">Buvva Campus Privacy Operations</p>
                <p className="text-xs text-slate-500 mt-0.5">buvva.co.in • Hyderabad, Telangana, India</p>
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
