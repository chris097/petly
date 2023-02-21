import React from 'react'

const CardSkeleton = () => {
  return (
      <div className='w-[327px] h-[323px] bg-white border border-nextgray p-5'>
          <div className='w-full h-[165px] bg-skyblue rounded animate-pulse' />
          <div className='flex justify-between items-center mt-4 animate-pulse'>
              <div className='w-[105px] h-4 rounded-md bg-nextgray' />
              <div className='w-9 h-9 rounded-full bg-nextgray' />
          </div>
          <div className='flex justify-between items-center mt-4 animate-pulse'>
              <div className='w-[121px] h-10 bg-nextgray rounded-full' />
              <div className='flex space-x-3 items-center'>
                  <div className='w-7 h-7 rounded-full bg-nextgray' />
                  <div className='w-10 h-4 rounded-full bg-nextgray' />
              </div>
          </div>
    </div>
  )
}

export default CardSkeleton