import React from 'react'

export default function TrustBadge() {
  return (
    <div className="mx-4 my-4 rounded-2xl overflow-hidden shadow-md border border-orange-200">
      {/* Top banner */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-3 text-center">
        <p className="text-white font-black text-base tracking-wide">
          ⭐ Highly Rated by Parents &amp; Students ⭐
        </p>
      </div>
      {/* Stats row */}
      <div className="bg-white px-4 py-3 grid grid-cols-3 divide-x divide-gray-100">
        {[
          { val:'5M+', label:'Students' },
          { val:'4.8★', label:'App Rating' },
          { val:'98%', label:'Recommend' },
        ].map((s,i)=>(
          <div key={i} className="text-center px-2">
            <p className="text-orange-600 font-black text-xl">{s.val}</p>
            <p className="text-gray-400 text-xs">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
