import React from 'react'

function TopHeading({title,description}) {
  return (
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto my-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl text-blue-950 font-bold">
          {title}
        </h1>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-amber-500 rounded-lg my-3"></div>
        {description && (<p className="text-sm sm:text-base md:text-lg leading-6 text-zinc-600 px-2">
          {description}
        </p>)}
      </div>
  )
}

export default TopHeading