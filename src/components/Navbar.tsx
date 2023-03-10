import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex max-w-[1240px] mx-auto border border-indigo-600 h-32 items-end font-serif text-6xl'>
        <Link to='/'>Sapiência</Link>
    </div>
  )
}

export default Navbar
