import React, { useState } from 'react'

const boards = [
  { id:'state', label:'State Board', icon:'🏫', desc:'All State Boards' },
  { id:'cbse',  label:'CBSE',        icon:'📚', desc:'Central Board' },
  { id:'icse',  label:'ICSE',        icon:'🎓', desc:'Council Board' },
]

export default function BoardSelection({ selected, onSelect }) {
  return (
    <div className="px-4 py-5 bg-white border-b border-gray-100">
      <h2 className="text-gray-900 font-bold text-base mb-3 flex items-center gap-2">
        <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">1</span>
        Choose Your Board
      </h2>
      <div className="grid grid-cols-3 gap-2">
        {boards.map(b=>(
          <button
            key={b.id}
            onClick={()=>onSelect(b.id)}
            className={`relative rounded-2xl border-2 p-3 flex flex-col items-center gap-1 transition-all duration-200 active:scale-95
              ${selected===b.id
                ? 'border-orange-500 bg-orange-50 shadow-lg shadow-orange-200'
                : 'border-gray-200 bg-white hover:border-orange-300 hover:bg-orange-50/50 hover:shadow-md'
              }`}
          >
            {selected===b.id && (
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
            )}
            <span className="text-2xl">{b.icon}</span>
            <span className={`font-bold text-sm ${selected===b.id?'text-orange-600':'text-gray-800'}`}>{b.label}</span>
            <span className="text-xs text-gray-400">{b.desc}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
