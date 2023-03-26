import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getArticles } from './Articles.actions'


const Articles = () => {
  
  useEffect(() => {
    getArticles()
  }, [])
  

  return (
    <div>
      
    </div>
  )
}

export default Articles
