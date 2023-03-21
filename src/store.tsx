import { configureStore } from '@reduxjs/toolkit'
import homeCardSliceReducer from './components/homecards/homeCardsSlice'


export const store = configureStore({
    reducer: {
        homeCards: homeCardSliceReducer
    },
  })


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



