import React, { useState } from 'react'

export default function PricingCard({ selectedClass, selectedBoard }) {
  const [clicked, setClicked] = useState(false)

  const handleEnroll = () => {
    if (!selectedClass || !selectedBoard) {
      alert('Please select your Board and Class first! 👆')
      return
    }
    setClicked(true)
    setTimeout(()=>setClicked(false), 2000)
    alert(`🎉 Enrolling in Class ${selectedClass} — ${selectedBoard.toUpperCase()} Concept Booster Course!\n\nRedirecting to payment...`)
  }

  return (
    <div className="px-4 py-5 bg-white border-b border-gray-100">
      <div className="bg-white rounded-3xl border-2 border-orange-200 shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3 text-center">
          <p className="text-white font-bold text-sm">🎓 Concept Booster Course</p>
          {selectedClass && selectedBoard && (
            <p className="text-orange-100 text-xs mt-0.5">Class {selectedClass} · {selectedBoard.toUpperCase()}</p>
          )}
        </div>

        <div className="p-5">
          {/* Price */}
          <div className="text-center mb-5">
            <div className="flex items-center justify-center gap-3 mb-1">
              <span className="text-gray-400 line-through text-xl font-semibold">₹499</span>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">94% OFF</span>
            </div>
            <div className="flex items-end justify-center gap-1">
              <span className="text-gray-500 text-lg font-semibold">₹</span>
              <span className="text-6xl font-black text-gray-900 leading-none">29</span>
            </div>
            <p className="text-gray-400 text-xs mt-1">Include all taxes · One-time payment</p>
          </div>

          {/* What's included */}
          <div className="bg-orange-50 rounded-2xl p-4 mb-5">
            <p className="text-orange-700 font-bold text-xs mb-2">✨ Everything included:</p>
            <div className="space-y-1.5">
              {[
                '80+ HD Video Lectures','Live Doubt Solving Sessions',
                'AI-Powered Study Planner','Parent Progress Dashboard',
                'Downloadable Notes & PDFs','Certificate of Completion',
                'WhatsApp Support Group','Lifetime Access to Recordings',
              ].map((item,i)=>(
                <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                  <span className="text-green-500 font-bold flex-shrink-0">✓</span>{item}
                </div>
              ))}
            </div>
          </div>

          {/* Urgency */}
          <div className="flex items-center justify-between bg-red-50 border border-red-100 rounded-xl px-3 py-2 mb-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 blink"/>
              <span className="text-red-600 font-bold text-xs">Only Today</span>
            </div>
            <span className="text-red-500 text-xs font-semibold">⏰ Offer ends at midnight</span>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleEnroll}
            className={`w-full py-4 rounded-2xl font-black text-lg text-white transition-all duration-200 shadow-lg active:scale-95
              ${clicked
                ? 'bg-green-500 shadow-green-300'
                : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-orange-300 hover:shadow-xl hover:shadow-orange-200 btn-pulse'
              }`}
          >
            {clicked ? '✅ Enrolled!' : 'Enroll Now →'}
          </button>
          <p className="text-center text-gray-400 text-xs mt-2">🔒 Secure Payment · 7-day Money Back Guarantee</p>
        </div>
      </div>
    </div>
  )
}
