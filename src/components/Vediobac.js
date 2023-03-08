import React from 'react'
import beachVid from '../assests/beachVid.mp4'
import SearchIcon from '@mui/icons-material/Search';
const Vediobac = () => {
  return (
    <div className='w-full h-screen relative'>
        
         <video className='w-full h-full object-cover' autoPlay loop muted >
            <source src={beachVid} type='video/mp4'/>
         </video>
         <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
         <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4 '>
            <h1 className='text-2xl text-bold mx-5 sm:text-3xl md:text-4xl'>First Class Travel</h1><br />
            <h1 className='text-2xl text-bold sm:text-3xl md-4xl'>Top 1% Locations Worldwide</h1>
            <div className='flex justify-between items-center max-w-[800px] w-full  mx-auto mt-6 bg-[#ecf0f1] rounded-[8px] p-2 '>
                <input className=' bg-transparent outline-none text-black w-full' type="text" placeholder='Search Destinations' />
                <SearchIcon sx={{fontSize:'30px', color:'gray'}}/>
            </div>
         </div>
        
        
    </div>
  )
}

export default Vediobac
