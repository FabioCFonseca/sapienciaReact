import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import {db} from '../config/config';
import { collection, getDocs } from 'firebase/firestore';

// INTERFACE
interface articleObj {
    author: string;
    description: string;
    text: string;
    title: string;
 }

 interface articleState {
   articles: articleObj[] | null,
   error: null | string,
   loading: boolean  
 }

 const initialState = {
    loading: false,
    error: null,
    articles: null
} as articleState


// ACTION
  export const getArticles = createAsyncThunk(
    'articles/fetchAllArticles', 
    async (thunkAPI) => {
        const collectionRef  = collection(db, 'artigos');
        try {
            const fbData = await getDocs(collectionRef) 
            const data = fbData.docs.map((doc) => ({...doc.data()} as articleObj)) 
            return data  
        } catch (error) {
            console.log('Data base fetch error' + error)
        }
    }
  )


// SLICE
const articleSlice = createSlice ({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder
          .addCase(getArticles.pending, (state, action) => {
              state.loading = true
          })    
          .addCase(getArticles.fulfilled, (state, action: PayloadAction<any>) => {
              state.loading = false  
              state.articles = action.payload
          })
          .addCase(getArticles.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.error = action.payload
          })     
    }
}) 

export default articleSlice.reducer