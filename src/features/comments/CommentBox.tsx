import React, { useState } from 'react'

const CommentBox = () => {
  const [comment, setComment] = useState<string>('')
 
  const submitComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
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
