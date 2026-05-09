import React from 'react'

const features = [
  { icon:'🧠', title:'AI-Powered Learning', desc:'Personalised study paths adapted to your child\'s pace and style.' },
  { icon:'👨‍🏫', title:'IIT/NIT Teachers', desc:'Learn from India\'s top educators — all IIT or NIT graduates.' },
  { icon:'📊', title:'Real-time Progress', desc:'Parents get live dashboards tracking every concept mastered.' },
  { icon:'🏆', title:'Olympiad Ready', desc:'50+ solving strategies to ace competitive exams & school tests.' },
]

export default function CourseFeatures() {
  return (
    <div className="px-4 py-5 bg-gray-50 border-b border-gray-100">
      <h2 className="text-gray-900 font-bold text-base mb-4 text-center">
        Why <span className="text-orange-500">Concept Booster</span> Works
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {features.map((f,i)=>(
          <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-200 transition-all">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-gray-900 font-bold text-sm mb-1">{f.title}</h3>
            <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
