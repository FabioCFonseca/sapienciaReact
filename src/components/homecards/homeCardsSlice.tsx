import { createSlice, PayloadAction } from "@reduxjs/toolkit"

  interface initState {
    cards: any[]
  }

  const initialState: initState = {
      cards: []
  }

  const homeCardsSlice = createSlice({
    name: 'homeCardSlice',
    initialState,
    reducers: {
      // reducer defines and receives the state to be received  
      setCards(state, action: PayloadAction<any[]> ) {
        console.log('Dispatched state' + state)
        state.cards = action.payload
      }
    }
  })

//export const allArticles = (state: cardObj) => state.homeCardSlice

export const { setCards } = homeCardsSlice.actions

export default homeCardsSlice.reducer