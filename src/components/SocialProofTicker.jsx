import React from 'react'
const names = [
  "S***i from Rajasthan","V***a from Chandigarh","R***j from Mumbai","P***a from Delhi",
  "A***v from Pune","M***i from Chennai","K***n from Kolkata","N***a from Hyderabad",
  "T***k from Jaipur","D***a from Lucknow","H***r from Bhopal","S***a from Nagpur"
]
export default function SocialProofTicker() {
  return (
    <div className="bg-orange-50 border-y border-orange-100 py-2 ticker-wrap">
      <div className="ticker-content">
        {[...names,...names].map((n,i)=>(
          <span key={i} className="inline-flex items-center gap-1.5 mr-8 text-sm">
            <span className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {n[0]}
            </span>
            <span className="text-gray-700 font-medium italic">
              <span className="text-orange-600 font-semibold">{n}</span> has enrolled
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
