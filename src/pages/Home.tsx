import React from 'react'
import ArticlesCards from '../articles/ArticlesCards'
import CommentBox from '../features/comments/CommentBox'

const Home = () => {
  return (
    <div>
      <ArticlesCards />
      <CommentBox/>
    </div>
  )
}

export default Home
