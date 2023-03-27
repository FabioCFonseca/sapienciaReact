import { configureStore } from '@reduxjs/toolkit'
import articleSliceReducer from './articles/Articles.actions'


export const store = configureStore({
    reducer: {
        articles: articleSliceReducer 
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



