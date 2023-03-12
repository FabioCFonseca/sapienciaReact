import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='flex max-w-[1240px] mx-auto px-4 h-32 items-end font-serif text-6xl'>
          <Link to='/'>Sapiência</Link>  
      </div>
      <div className='grid grid-cols-2 max-w-[1240px] mx-auto border pt-3 px-4'>
        <div>
          <p className='border border-indigo-600'>Um blog sobre diversas áreas do conhecimento humano</p>
        </div>
        <div className="flex flex-row justify-end">
          <p className='px-5 border border-indigo-600'>About</p>
          <p className='px-5 border border-indigo-600'>Login</p>
        </div>
        <div className="w-[1240px] border-4 border-gray-400 my-1"></div>
      </div>  
    </>
  )
}

export default Navbar
