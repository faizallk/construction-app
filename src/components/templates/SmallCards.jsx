import React from 'react'

function SmallCards({ icon, title, detail }) {
  return (
    <div className="w-full h-36 bg-zinc-100 rounded-lg flex flex-col justify-center items-center shadow hover:shadow-lg transition-all duration-300">
      <i className={`${icon} text-3xl text-blue-950 mb-2`}></i>
      <h1 className="text-base font-semibold text-blue-900">{title}</h1>
      <h3 className="text-sm mt-1 text-zinc-600">{detail}</h3>
    </div>
  )
}

export default SmallCards
