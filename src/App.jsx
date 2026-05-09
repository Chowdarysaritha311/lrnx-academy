import React, { useState } from 'react'
import HeroBanner from './components/HeroBanner'
import BoardSelection from './components/BoardSelection'
import ClassGrid from './components/ClassGrid'
import TrustBadge from './components/TrustBadge'
import PromoSection from './components/PromoSection'
import CourseFeatures from './components/CourseFeatures'
import Testimonials from './components/Testimonials'
import PricingCard from './components/PricingCard'
import StickyFooter from './components/StickyFooter'

export default function App() {
  const [selectedBoard, setSelectedBoard] = useState('')
  const [selectedClass, setSelectedClass] = useState(null)

  const handleEnroll = () => {
    if (!selectedClass || !selectedBoard) {
      alert('Please select your Board and Class first! 👆')
      return
    }
    alert(`🎉 Enrolling in Class ${selectedClass} — ${selectedBoard.toUpperCase()} Concept Booster Course!\n\nRedirecting to payment...`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top nav bar */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
              <span className="text-white font-black text-sm">L</span>
            </div>
            <span className="font-black text-gray-900 text-lg">Lrnx <span className="text-orange-500">Academy</span></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 hidden sm:block">📞 1800-XXX-XXXX</span>
            <button className="text-orange-500 border border-orange-300 text-xs font-bold px-3 py-1.5 rounded-xl hover:bg-orange-50 transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-lg mx-auto pb-28">
        <HeroBanner />
        <BoardSelection selected={selectedBoard} onSelect={setSelectedBoard} />
        <ClassGrid selected={selectedClass} onSelect={setSelectedClass} />
        <TrustBadge />
        <PromoSection />
        <CourseFeatures />
        <Testimonials />
        <PricingCard selectedClass={selectedClass} selectedBoard={selectedBoard} />

        {/* Footer links */}
        <div className="px-4 py-6 text-center">
          <p className="text-gray-400 text-xs mb-3">© 2026 Lrnx Academy Technologies Pvt. Ltd.</p>
          <div className="flex justify-center gap-4 text-xs text-gray-400">
            {['Privacy Policy','Terms of Service','Refund Policy','Contact Us'].map(l=>(
              <a key={l} href="#" className="hover:text-orange-500 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky bottom CTA */}
      <StickyFooter
        selectedClass={selectedClass}
        selectedBoard={selectedBoard}
        onEnroll={handleEnroll}
      />
    </div>
  )
}
