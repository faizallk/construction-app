import React from 'react'

function ProjectCard({ data }) {
  return (
    <div className="w-full md:w-[48%] lg:w-[48%] h-auto max-h-[95vh] rounded-md bg-white shadow overflow-hidden hover:shadow-md duration-200">
      {/* Image Section */}
      <div className="w-full h-48 md:h-56 lg:h-60">
        <img
          src={data.img}
          alt={data.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full px-5 sm:px-6 md:px-8 lg:px-10 py-5">
        <span className="bg-blue-900 text-white text-xs sm:text-sm px-3 py-1 rounded-full">
          {data.type}
        </span>

        <h1 className="mt-2 text-lg md:text-xl font-bold text-blue-950">
          {data.title}
        </h1>

        <div className="flex items-center gap-2 text-sm flex-wrap">
          <span className="flex items-center gap-1 text-zinc-500">
            <i className="ri-map-pin-line text-amber-500"></i> {data.location}
          </span>
          <span className="flex items-center gap-1 text-zinc-500">
            <i className="ri-calendar-line text-amber-500"></i> {data.year}
          </span>
        </div>

        {/* Client Challenges */}
        <div className="mt-2">
          <h1 className="text-blue-950 font-bold">Client Challenges</h1>
          <p className="text-sm text-zinc-500">{data.clientChallenge}</p>
        </div>

        {/* Our Solution */}
        <div className="mt-2">
          <h1 className="text-blue-950 font-bold">Our Solution</h1>
          <p className="text-sm text-zinc-500">{data.ourSolution}</p>
        </div>

        {/* Outcome */}
        <div className="mt-2">
          <h1 className="text-amber-500 font-semibold flex items-center">
            <i className="ri-award-line mr-1"></i> Outcome
          </h1>
          <p className="text-sm text-zinc-500">{data.outcome}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
