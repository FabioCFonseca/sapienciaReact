import React from 'react'
import { Link } from 'react-router-dom'
import { RxAvatar } from 'react-icons/rx'

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-end items-center px-4 pt-3 md:max-w-[1240px] md:mx-auto">
          <p className='px-2'>About</p>
          <p className='px-2'>Login</p>
          <RxAvatar className='w-6 h-6' />
      </div>
      <div className='flex items-end text-4xl font-serif px-4 h-16 md:max-w-[1240px] md:mx-auto md:h-32 md:text-6xl'>   
          <Link to='/'>Sapiência</Link>  
      </div>
      <div className='max-w-[1240px] mx-auto pt-3 px-4 font-serif'>
        <div>
          <p>Um blog sobre diversas áreas do conhecimento humano</p>
        </div>
        <div className="w-inherit border-4 border-gray-400"></div>
      </div>  
    </>
  )
}

export default Navbar


