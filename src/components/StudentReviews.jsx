import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, CheckCircle } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Rohit Varma',
    department: '3rd Year, Computer Science',
    campus: 'Engineering College',
    text: 'I used to skip lunch because the 20-minute canteen line meant I would be late for afternoon labs. With Buvva, I schedule my order during my 12:50 PM lecture and my tray is waiting for me the second I step in.',
    avatar: 'RV',
    color: 'from-orange-500 to-amber-500'
  },
  {
    name: 'Ananya Reddy',
    department: '2nd Year, Electronics',
    campus: 'Tech Institute',
    text: 'The live SSE token status is game changing. You literally watch your order transition from Cooking to Plated on the screen. No shouting, no confusion over order numbers.',
    avatar: 'AR',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    name: 'Karthik Rao',
    department: '4th Year, Mechanical',
    campus: 'University Campus',
    text: 'Best thing is genuine campus canteen prices! No inflated Swiggy markups or delivery charges. Plus UPI payment means zero hassle with counter change.',
    avatar: 'KR',
    color: 'from-blue-500 to-indigo-500'
  }
]

export default function StudentReviews() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF5200] text-xs font-bold uppercase tracking-wider mb-4">
            Student Loved
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Hear what campus foodies say.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Over 25,000+ meals served with zero lost break time.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#FF5200]/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-orange-500/10 relative"
            >
              <Quote className="w-10 h-10 text-orange-200 absolute top-6 right-6" />

              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3.5">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-tr ${review.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                  {review.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-slate-900 font-bold text-sm">{review.name}</h4>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-xs text-slate-500 block">{review.department}</span>
                  <span className="text-[11px] text-[#FF5200] font-semibold">{review.campus}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
