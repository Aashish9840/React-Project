import React from 'react'
import borabora from '../assests/borabora.jpg'
import borabora2 from '../assests/borabora2.jpg'
import keywest from '../assests/keywest.jpg'
import maldives2 from '../assests/maldives2.jpg'
import maldives3 from '../assests/maldives.jpg'


const Destination = () => {
  return (
    <div className='m-8'>
       <div className='mt-[20px] flex flex-col items-center justify-center'>
         <h1 className='text-3xl font-bold'>All-Inclusive Resorts</h1>
         <p className='m-5 text-[18px]'>On the Caribbean's Best Beaches</p>
       </div>
       <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={borabora} alt="/" />
            <img className='w-full h-full object-cover' src={borabora2} alt="/" />
            <img className='w-full h-full object-cover' src={keywest} alt="/" />
            <img className='w-full h-full object-cover' src={maldives2} alt="/" />
            <img className='w-full h-full object-cover' src={maldives3} alt="/" />
        </div>
    </div>
  )
}

export default Destination
