import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
  const [menubar,setMenubar]=useState(false)
  return (
    <div className='w-full p-8  flex items-center justify-between absolute text-white z-10'>
      <div className=' flex'>
        <h1 className='text-2xl md:text-4xl text-bold'>BEACHES</h1>
      </div>
      <div className='hidden md:flex items-center '>
        <nav className=' flex'>
          <div className='text-[15px] mr-[12px]'>Home</div>
          <div className='text-[15px] mr-[12px]'>Destinations</div>
          <div className='text-[15px] mr-[12px]'>Travel</div>
          <div className='text-[15px] mr-[12px]'>Views</div>
          <div className='text-[15px]'>Book</div>

        </nav>
      </div>
      <div className='hidden pr-6 md:flex cursor-pointer'>
        <SearchIcon fontSize='medium' sx={{ mr: '10px' }} />
        <PersonOutlineIcon fontSize='medium' />

      </div >
      <div className='block md:hidden'>
        <DragHandleIcon onClick={()=>setMenubar(!menubar)} fontSize='medium' />
      </div>

      < div className={menubar?' absolute w-[50%] right-0 top-0 h-screen p-3 bg-gray-300':' absolute w-[50%]  right-[5000px] top-0 h-full p-3 bg-gray-300' }>
        <div className='flex items-center justify-between'>
          <h1 className='text-bold text-[20px] text-white'>BEACHES</h1>
          <CloseIcon onClick={()=>setMenubar(!menubar)} fontSize='medium' className='cursor-pointer' />
        </div>
        <div>

        <ul className='p-3 text-black'>
          <li className='mt-[10px] text-[18px]'>Home</li>
          <li className='mt-[10px] text-[18px]'>Destinations</li>
          <li className='mt-[10px] text-[18px]'>Travel</li>
          <li className='mt-[10px] text-[18px]'>View</li>
          <li className='mt-[10px] text-[18px]'>Book</li>
        </ul>
        </div>

        <div className='flex flex-col w-full'>
          <button className='rounded-full bg-gray-500 p-2 my-4'>Search</button>
          <button className='rounded-full bg-gray-500 p-2 my-4'>Account</button>
        </div>
        <div className='m-4 flex justify-around item'>
          <FacebookIcon sx={{fontSize:'35px', color:'blue'}}/>
          <InstagramIcon sx={{fontSize:'35px', color:'orange'}}/>
          <TwitterIcon sx={{fontSize:'35px', color:'blue'}} />
          <GitHubIcon sx={{fontSize:'35px', color:'gray'}}/>
        </div>
      </div>
    </div>
  )
}

export default Header
