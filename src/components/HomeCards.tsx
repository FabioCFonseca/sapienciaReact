import React from 'react'
import useFetch from '../hooks/useFetch'

const HomeCards = () => {
  const { data } = useFetch()

  return (
    <div className='grid grid-cols-3 gap-3 max-w-[1240px] mx-auto pt-5 px-4'>
      <div className="bg-white rounded-lg shadow-md overflow-hidden text-center border border-indigo-600 font-serif">
        {/* <img src={imageSrc} alt="" className="w-full h-48 object-cover" /> */}
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">title</h2>
          <p className="text-gray-700">text</p>
        </div>
      </div>
    </div>
  )
}

export default HomeCards
