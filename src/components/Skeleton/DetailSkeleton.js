import React from 'react'

const DetailSkeleton = () => {
  return (
    <div className='w-1/2 flex justify-center mx-auto mt-16 flex-col'>
       <div className='flex justify-between items-center animate-pulse'>
            <div className='flex space-x-4 items-center'>
          <div className='w-[80px] h-[80px] rounded-full bg-nextgray p-4 flex justify-center items-center'>
            <div className=' bg-skyprimaryblue w-full h-full rounded-full' />
            </div>
              <div>
                <div className='bg-skyprimaryblue w-[156px] h-7 rounded-full' />
                <div className='bg-skyprimaryblue w-24 rounded-full mt-2 h-4' />
              </div>
            </div>
            <div>
              <div className='w-14 h-14 rounded-full bg-skyprimaryblue' />
        </div>
          </div>
      <div className='bg-lighterblue w-full h-auto mt-7 p-8 animate-pulse'>
        <div className='bg-skyprimaryblue w-28 h-4 rounded-full' />
        <div className='w-full h-[223px] bg-skyprimaryblue mt-5' />
        </div>
    </div>
  )
}

export default DetailSkeleton