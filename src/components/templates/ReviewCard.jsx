import React from 'react'
import ReviewPersonCard from './ReviewPersonCard'

function ReviewCard({ data }) {
  return (
    <div className="w-full h-auto rounded-md bg-[#ffffff31] px-5 py-4">
      <p className="text-sm italic text-zinc-200">"{data.text}"</p>
      <ReviewPersonCard
        name={data.name}
        role={data.role}
        initials={data.initials}
      />
    </div>
  )
}

export default ReviewCard
