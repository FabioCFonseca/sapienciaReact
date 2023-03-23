import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getFirestore, collection, addDoc, CollectionReference, DocumentData } from 'firebase/firestore';
import { db } from '../../config/config'

const commentRef = collection(db, 'comentário')



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
        addComments: (state, action: PayloadAction<any>) => {
            addDoc(commentRef, action.payload)
        } 
   }
   })

//export const { addComments } = commentSlice.actions

export default commentSlice.reducer