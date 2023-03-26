import { collection, addDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { db } from '../../config/config'
import { addComments } from './CommentSlice'


const CommentBox = () => {

    
  const [comment, setComment] = useState<string>('')
  const disptach = useDispatch()
 
  const submitComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    disptach(addComments(comment))
  }  

  return (
    <form onSubmit={submitComment} className="max-w-[1240px] mx-auto font-serif py-5">
        <textarea value={comment} onChange={(event) => setComment(event.target.value)} className='w-full' placeholder='Faça um comentário...' />
        <br />
        <button type="submit">Submit</button>
  </form>
  )
}

export default CommentBox
