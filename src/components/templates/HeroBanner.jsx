import React from 'react'

function HeroBanner({title,description,bgImage}) {
  return (
    <div className="w-full max-h-[70vh] mt-[10vh] relative overflow-hidden">
  {/* Background image */}
  <img
    src={`${bgImage}`}
    className="w-full h-auto max-h-[90vh] sm:max-h-[100vh] object-cover"
    alt=""
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center px-4 py-10 sm:py-16 md:py-20 text-center">
    <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-7xl capitalize font-bold text-zinc-100 leading-snug">
     {title}
    </h1>

    <p className="max-w-2xl text-zinc-300 leading-snug mt-4 text-sm sm:text-base md:text-lg ">
      {description}
    </p>
  </div>
</div>
  )
}

export default HeroBanner