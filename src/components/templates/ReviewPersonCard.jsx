import React from 'react'

function ReviewPersonCard({name,role,initials}) {
  return (
    <div className='mt-3 flex items-center gap-2 relative'>
        
        <div className='w-10 h-10 bg-amber-500 rounded-full flex justify-center items-center font-semibold text-zinc-100'>{initials}</div>
<div>
    <h2 className='text-zinc-100 font-bold'>{name}</h2>
     <h5 className='text-xs text-zinc-300'>{role}</h5>
</div>
    </div>
  )
}

export default ReviewPersonCard