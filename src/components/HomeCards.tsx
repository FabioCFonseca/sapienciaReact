import React from 'react'
import useFetch from '../hooks/useFetch'

const HomeCards = () => {
  //const { data } = useFetch()

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* <img src={imageSrc} alt="" className="w-full h-48 object-cover" /> */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2"></h2>
        <p className="text-gray-700"></p>
      </div>
    </div>
  )
}

export default HomeCards
