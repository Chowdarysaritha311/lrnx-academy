import React, { useState } from 'react'

const classes = [
  { n:1,  sold:false },
  { n:2,  sold:false },
  { n:3,  sold:false },
  { n:4,  sold:false },
  { n:5,  sold:false },
  { n:6,  sold:false },
  { n:7,  sold:false },
  { n:8,  sold:false },
  { n:9,  sold:false },
  { n:10, sold:true  },
  { n:11, sold:true  },
  { n:12, sold:true  },
]

export default function ClassGrid({ selected, onSelect }) {
  return (
    <div className="px-4 py-5 bg-white border-b border-gray-100">
      <h2 className="text-gray-900 font-bold text-base mb-1 flex items-center gap-2">
        <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">2</span>
        Choose Class to Boost Score (2026–27) 🔥
      </h2>
      <p className="text-gray-400 text-xs mb-3 ml-8">Select your class to see personalised content</p>
      <div className="grid grid-cols-4 gap-2">
        {classes.map(cls=>(
          <button
            key={cls.n}
            onClick={()=>!cls.sold && onSelect(cls.n)}
            disabled={cls.sold}
            className={`relative rounded-2xl border-2 py-3 px-1 text-center transition-all duration-200
              ${cls.sold
                ? 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-60'
                : selected===cls.n
                  ? 'border-orange-500 bg-gradient-to-b from-orange-500 to-amber-500 shadow-lg shadow-orange-300 scale-105'
                  : 'border-orange-200 bg-gradient-to-b from-orange-50 to-amber-50 hover:border-orange-400 hover:shadow-md hover:scale-105 active:scale-95'
              }`}
          >
            <span className={`font-bold text-sm block ${cls.sold?'text-gray-400': selected===cls.n?'text-white':'text-orange-700'}`}>
              Class {cls.n}
            </span>
            {cls.sold && (
              <span className="text-gray-400 text-xs block leading-tight">(sold out)</span>
            )}
            {selected===cls.n && !cls.sold && (
              <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
