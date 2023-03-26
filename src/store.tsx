import { configureStore } from '@reduxjs/toolkit'
import homeCardSliceReducer from './components/homecards/homeCardsSlice'
import articleSliceReducer from './articles/Articles.actions'


export const store = configureStore({
    reducer: {
        homeCards: homeCardSliceReducer,
        articles: articleSliceReducer 
    },
  })


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



