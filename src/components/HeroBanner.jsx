import React from 'react'
import SocialProofTicker from './SocialProofTicker'

export default function HeroBanner() {
  return (
    <div>
      {/* Orange hero banner */}
      <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-amber-500 relative overflow-hidden">
        {/* Background decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4"/>
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/4"/>

        <div className="max-w-lg mx-auto px-4 pt-5 pb-0 relative z-10">
          {/* Top badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-white/20 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
              🏆 Most Innovative EdTech 2026
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-white font-black text-2xl md:text-3xl leading-tight mb-1">
            OUTPERFORM PEERS
          </h1>
          <h2 className="text-white font-black text-2xl md:text-3xl leading-tight mb-2">
            NEW SESSION
          </h2>
          <p className="text-orange-100 font-semibold text-base mb-3">
            Unlock Potential to Score 100%
          </p>

          {/* Social proof pill */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-3 py-1.5 mb-4 border border-white/30">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">V</div>
            <span className="text-white text-xs font-medium italic">
              <span className="font-bold">V***a from Chandigarh</span> has enrolled
            </span>
          </div>

          {/* Feature bullets */}
          <ul className="space-y-1.5 mb-4">
            {['Maths & Science & Olympiads','50+ Core Concepts','50+ Solving Skills','IIT/NIT Teachers'].map((f,i)=>(
              <li key={i} className="flex items-center gap-2 text-white font-semibold text-sm">
                <span className="text-yellow-300 text-base">▶</span>{f}
              </li>
            ))}
          </ul>

          {/* Teacher images area */}
          <div className="flex justify-end -mb-1">
            <div className="flex items-end gap-2">
              {/* Teacher silhouettes */}
              <div className="w-28 h-36 bg-gradient-to-t from-orange-700/40 to-transparent rounded-t-full flex items-end justify-center overflow-hidden">
                <div className="w-24 h-32 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-3xl flex flex-col items-center justify-end pb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 mb-1 flex items-center justify-center text-white font-bold text-lg">P</div>
                  <div className="w-16 h-14 bg-gray-800 rounded-t-xl"/>
                </div>
              </div>
              <div className="w-32 h-40 bg-gradient-to-t from-orange-700/40 to-transparent rounded-t-full flex items-end justify-center overflow-hidden">
                <div className="w-28 h-36 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-3xl flex flex-col items-center justify-end pb-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-300 to-indigo-400 mb-1 flex items-center justify-center text-white font-bold text-xl">A</div>
                  <div className="w-20 h-16 bg-gray-800 rounded-t-xl"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip at bottom of hero */}
        <div className="bg-white/10 backdrop-blur border-t border-white/20 py-2 px-4 text-center">
          <p className="text-white font-bold text-sm tracking-wide">
            10,000,000+ PARENTS' CHOICE
          </p>
        </div>
      </div>

      {/* Scrolling ticker */}
      <SocialProofTicker/>

      {/* Course title strip */}
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <h3 className="text-gray-900 font-bold text-lg leading-snug mb-1">
          Concept Booster Course - 5X Efficient Learning Methods by IITians
        </h3>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span className="text-orange-500">🕐</span>
          <span>Course Schedule: 11 May – 16 May</span>
        </div>
      </div>
    </div>
  )
}
