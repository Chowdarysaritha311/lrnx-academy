import React, { useState, useEffect } from 'react'

export default function PromoSection() {
  const [studentCount, setStudentCount] = useState(1957198)

  useEffect(() => {
    const interval = setInterval(() => {
      setStudentCount(prev => prev + Math.floor(Math.random() * 3) + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="px-4 py-5 bg-white border-b border-gray-100">
      {/* Course branding */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-2xl p-5 mb-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4"/>
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/4"/>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-yellow-400 text-yellow-900 text-xs font-black px-2 py-0.5 rounded-full">🔥 LIMITED</span>
            <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">2026-27 Batch</span>
          </div>
          <h3 className="text-white font-black text-lg leading-tight mb-1">Concept Booster Course</h3>
          <p className="text-blue-200 font-semibold text-sm mb-3">5X Efficient Learning Methods by IITians</p>
          <div className="grid grid-cols-2 gap-2">
            {['50+ Core Concepts','50+ Solving Skills','Live Doubt Sessions','AI Progress Tracking'].map((f,i)=>(
              <div key={i} className="flex items-center gap-1.5 text-white text-xs">
                <span className="text-green-400 font-bold">✓</span>{f}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust count */}
      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 text-center mb-4">
        <p className="text-gray-500 text-xs mb-1">Trusted by</p>
        <p className="text-orange-600 font-black text-3xl mb-0.5">5,000,000+</p>
        <p className="text-gray-700 font-bold text-sm">Parents &amp; Students across India</p>
      </div>

      {/* Live student counter */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl px-4 py-3 flex items-center justify-between">
        <div>
          <p className="text-green-700 font-bold text-sm flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block blink"/>
            Only Today
          </p>
          <p className="text-gray-500 text-xs">Be the <span className="font-bold text-gray-800">{studentCount.toLocaleString()}th</span> Student</p>
        </div>
        <div className="text-right">
          <p className="text-green-600 font-black text-lg">🎯 Live</p>
          <p className="text-gray-400 text-xs">Seats filling fast</p>
        </div>
      </div>
    </div>
  )
}
