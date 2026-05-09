import React from 'react'

export default function StickyFooter({ selectedClass, selectedBoard, onEnroll }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-orange-200 shadow-2xl shadow-black/20">
      <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-gray-500 line-through text-sm font-semibold">₹499</span>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-1.5 py-0.5 rounded-full">94% OFF</span>
          </div>
          <div className="flex items-baseline gap-0.5">
            <span className="text-orange-600 font-black text-3xl leading-none">₹39</span>
            <span className="text-gray-400 text-xs ml-1">Only Today</span>
          </div>
          {selectedClass && selectedBoard ? (
            <p className="text-green-600 text-xs font-semibold">Class {selectedClass} · {selectedBoard.toUpperCase()} ✓</p>
          ) : (
            <p className="text-gray-400 text-xs">Be the {(1957198).toLocaleString()}th Student</p>
          )}
        </div>
        <button
          onClick={onEnroll}
          className="flex-shrink-0 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-base px-6 py-3.5 rounded-2xl shadow-lg shadow-orange-300 active:scale-95 transition-all hover:shadow-xl"
        >
          Enroll Now
        </button>
      </div>
    </div>
  )
}
