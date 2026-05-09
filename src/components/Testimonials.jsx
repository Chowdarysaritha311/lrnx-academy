import React from 'react'

const reviews = [
  { name:'Priya M.', role:'Parent, Class 5', stars:5, text:'My daughter\'s Maths score jumped from 62% to 91% in just one month. The IIT teachers explain so clearly!', city:'Mumbai' },
  { name:'Rahul S.', role:'Student, Class 8', stars:5, text:'The concept videos are amazing. I actually understand why formulas work, not just how to use them.', city:'Delhi' },
  { name:'Anjali K.', role:'Parent, Class 3', stars:5, text:'Affordable, effective, and my son loves the gamified lessons. Best ₹39 I ever spent!', city:'Pune' },
]

export default function Testimonials() {
  return (
    <div className="px-4 py-5 bg-gray-50 border-b border-gray-100">
      <h2 className="text-gray-900 font-bold text-base mb-4 text-center">
        What Parents &amp; Students Say 💬
      </h2>
      <div className="space-y-3">
        {reviews.map((r,i)=>(
          <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-bold text-sm">{r.name[0]}</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.role} · {r.city}</p>
                </div>
              </div>
              <div className="flex">
                {[...Array(r.stars)].map((_,j)=>(
                  <span key={j} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">"{r.text}"</p>
          </div>
        ))}
      </div>
    </div>
  )
}
