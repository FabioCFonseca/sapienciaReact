import { configureStore } from '@reduxjs/toolkit'
import homeCardSliceReducer from './components/homecards/homeCardsSlice'

export const store = configureStore({
    reducer: {
        homeCards: homeCardSliceReducer
    },
  })

console.log(store.getState().homeCards);

