import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../config/config'

const CommentBox = () => {
  const [comment, setComment] = useState<string>('')

  const commentRef = collection(db, 'comentário')  
 
  const submitComment = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await addDoc(commentRef, {
      comment: comment,
      //TODO ADD ID GENERATOR FOR TS
      id: '55',
      username: 'eu'
    })
    console.log('submited')
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
