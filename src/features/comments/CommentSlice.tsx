import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getFirestore, collection, addDoc, CollectionReference, DocumentData } from 'firebase/firestore';
import { db } from '../../config/config'

const commentRef = collection(db, 'comentário')

addDoc(commentRef, {name: 1}) 

interface commentObj {
    id: string,
    comment: string,
    username: string
}

interface State {
    comments: commentObj[]
}

const initialState: State = {
    comments: []    
}


  const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {  
    //   addComments: async(state, action: PayloadAction<commentObj>) {
    //     await commentRef.add(action.payload)
    //     state.comments.push(action.payload)
    //   }
    }
  })

//export const { addComments } = commentSlice.actions

export default commentSlice.reducer