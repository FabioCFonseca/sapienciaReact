import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { addDoc, collection } from "firebase/firestore";
import {  db } from "../../config/config";



const initialState: string = '' 

  const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {  
        addComments: (state, action: PayloadAction<string>) => {
            const comentRef = collection(db, 'comentário')
            const payloa = {comment: action.payload}
            addDoc(comentRef, payloa)
        }
}})   

export const { addComments } = commentSlice.actions

export default commentSlice.reducer





//

// interface commentObj {
//     comment: string,
// }

// interface State {
//     comments: commentObj[]
// }
